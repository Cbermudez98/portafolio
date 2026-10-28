import { Injectable, inject, signal } from '@angular/core';
import type { Content, TDocumentDefinitions } from 'pdfmake/interfaces';
import { I18nService } from './i18n.service';
import { PortfolioDataService } from './portfolio-data.service';
import { groupByCompany } from '../utils/experience-groups';

const BLUE = '#1d4ed8';
const INK = '#111111';
const MUTED = '#4b5563';
const RULE = '#d1d5db';
/** A4 width (595pt) minus horizontal margins */
const CONTENT_WIDTH = 515;

/**
 * Builds the CV as a PDF in the browser from the live portfolio data, in the
 * current page language. Nothing is stored: new experience, studies or
 * certifications show up the next time it is downloaded.
 */
@Injectable({ providedIn: 'root' })
export class CvService {
  private readonly i18n = inject(I18nService);
  private readonly data = inject(PortfolioDataService);

  public readonly generating = signal(false);

  public async download(): Promise<void> {
    if (this.generating()) return;
    this.generating.set(true);
    try {
      // pdfmake (+ fonts) is only loaded when someone asks for the CV
      const [pdfMakeModule, vfsModule]: any[] = await Promise.all([
        import('pdfmake/build/pdfmake'),
        import('pdfmake/build/vfs_fonts')
      ]);
      const pdfMake = pdfMakeModule.default ?? pdfMakeModule;
      const vfs = vfsModule.default ?? vfsModule;
      const t = this.i18n.t();
      pdfMake.createPdf(this.buildDocument(), undefined, undefined, vfs).download(`${t.cv.fileName}.pdf`);
    } finally {
      this.generating.set(false);
    }
  }

  private buildDocument(): TDocumentDefinitions {
    const t = this.i18n.t();
    const info = this.data.personalInfo;

    return {
      pageSize: 'A4',
      pageMargins: [40, 40, 40, 48],
      info: { title: `CV — ${info.name}`, author: info.name },
      defaultStyle: { font: 'Roboto', fontSize: 9.5, color: INK, lineHeight: 1.25 },
      styles: {
        name: { fontSize: 24, bold: true, color: BLUE },
        headline: { fontSize: 12, color: INK, margin: [0, 2, 0, 8] },
        section: { fontSize: 11, bold: true, color: BLUE, characterSpacing: 0.6 },
        company: { fontSize: 11, bold: true, color: INK },
        role: { fontSize: 10, bold: true, color: INK },
        meta: { fontSize: 8.5, color: MUTED }
      },
      footer: (current: number, total: number) => ({
        text: `${info.name} · ${current} / ${total}`,
        alignment: 'right',
        fontSize: 8,
        color: MUTED,
        margin: [0, 16, 40, 0]
      }),
      content: [
        ...this.header(),
        ...this.section(t.cv.summary, [{ text: `${t.about.intro} ${t.about.p1}` }]),
        ...this.section(t.cv.experience, this.experience()),
        ...this.section(t.cv.skills, [this.skills()]),
        ...this.section(t.cv.education, this.education()),
        ...this.section(t.cv.certifications, [this.certifications()])
      ]
    };
  }

  private header(): Content[] {
    const t = this.i18n.t();
    const info = this.data.personalInfo;
    const sep = { text: '   ·   ', color: MUTED };
    return [
      { text: info.name, style: 'name' },
      { text: t.hero.tagline, style: 'headline' },
      {
        text: [
          { text: info.email, link: `mailto:${info.email}` }, sep,
          { text: 'linkedin.com/in/cesar-bermudez-sierra', link: info.linkedin }, sep,
          { text: `github.com/${info.handle}`, link: info.github }
        ],
        fontSize: 9
      },
      {
        text: [
          t.contact.locationValue, sep,
          { text: `${t.contact.relocationLabel}: `, bold: true },
          t.contact.relocationRegions.join(', ')
        ],
        fontSize: 9,
        margin: [0, 2, 0, 0]
      }
    ];
  }

  private section(title: string, body: Content[]): Content[] {
    return [
      { text: title.toUpperCase(), style: 'section', margin: [0, 16, 0, 3] },
      {
        canvas: [{ type: 'line', x1: 0, y1: 0, x2: CONTENT_WIDTH, y2: 0, lineWidth: 1, lineColor: BLUE }],
        margin: [0, 0, 0, 8]
      },
      ...body
    ];
  }

  private experience(): Content[] {
    const t = this.i18n.t();
    return groupByCompany(t.experience.items).map((group, index) => {
      const multi = group.roles.length > 1;
      const roles: Content[] = group.roles.map(role => ({
        stack: [
          {
            columns: [
              { text: role.role, style: 'role', width: '*' },
              { text: multi ? role.period : role.type, style: 'meta', width: 'auto', alignment: 'right' }
            ],
            margin: [0, 4, 0, 1]
          },
          { text: role.description, italics: true, margin: [0, 0, 0, 3] },
          { ul: [...role.achievements], margin: [6, 0, 0, 3] },
          {
            text: [{ text: `${t.cv.technologies}: `, bold: true }, role.technologies.join(' · ')],
            style: 'meta'
          }
        ],
        margin: multi ? [8, 0, 0, 2] : [0, 0, 0, 2]
      }));

      return {
        stack: [
          {
            columns: [
              { text: group.company, style: 'company', width: '*' },
              { text: group.period, style: 'meta', width: 'auto', alignment: 'right' }
            ]
          },
          { text: group.location, style: 'meta' },
          ...roles
        ],
        margin: [0, index === 0 ? 0 : 10, 0, 0]
      } as Content;
    });
  }

  private skills(): Content {
    const t = this.i18n.t();
    const unit = (years: number) => (years === 1 ? t.skills.year : t.skills.years);
    return {
      table: {
        widths: [110, '*'],
        body: this.data.skillGroups.map(group => [
          { text: t.skills.groups[group.id].title, bold: true },
          {
            // non-breaking spaces keep "Name (N years)" on one line
            text: group.items.map(item => `${item.name} (${item.years} ${unit(item.years)})`.replace(/ /g, '\u00a0')).join(' · ')
          }
        ])
      },
      layout: {
        hLineWidth: (i: number, node: any) => (i === 0 || i === node.table.body.length ? 0 : 0.5),
        vLineWidth: () => 0,
        hLineColor: () => RULE,
        paddingLeft: () => 0,
        paddingRight: () => 6,
        paddingTop: () => 4,
        paddingBottom: () => 4
      }
    };
  }

  private education(): Content[] {
    const t = this.i18n.t();
    return t.education.items.map((edu, index) => ({
      stack: [
        {
          columns: [
            { text: edu.degree, style: 'role', width: '*' },
            { text: edu.period, style: 'meta', width: 'auto', alignment: 'right' }
          ]
        },
        {
          text: [
            edu.institution,
            { text: ` · ${edu.location}`, color: MUTED },
            edu.status === 'in-progress' ? { text: ` · ${t.education.inProgress}`, color: BLUE, bold: true } : ''
          ]
        }
      ],
      margin: [0, index === 0 ? 0 : 6, 0, 0]
    }));
  }

  private certifications(): Content {
    const t = this.i18n.t();
    return {
      table: {
        headerRows: 1,
        widths: ['*', 'auto', 'auto'],
        body: [
          [t.cv.certName, t.cv.certIssuer, t.cv.certDate].map(text => ({ text, bold: true, color: BLUE, fontSize: 8.5 })),
          ...t.education.certifications.map(cert => [
            cert.credentialUrl
              ? { text: cert.name, link: cert.credentialUrl, decoration: 'underline', decorationColor: RULE }
              : { text: cert.name },
            { text: cert.issuer },
            { text: cert.issued, noWrap: true }
          ])
        ]
      },
      fontSize: 8.5,
      layout: {
        hLineWidth: (i: number) => (i === 1 ? 0.8 : i === 0 ? 0 : 0.4),
        vLineWidth: () => 0,
        hLineColor: (i: number) => (i === 1 ? BLUE : RULE),
        paddingLeft: () => 0,
        paddingRight: () => 8,
        paddingTop: () => 3,
        paddingBottom: () => 3
      }
    } as Content;
  }
}
