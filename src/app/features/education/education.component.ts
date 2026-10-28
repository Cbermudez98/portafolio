import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/services/i18n.service';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { CompanyLogoComponent } from '../../shared/components/company-logo/company-logo.component';
import { certificationBrands, educationBrands } from '../../core/services/company-brands';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule, IconComponent, CompanyLogoComponent],
  template: `
    <section id="education" class="section section-alt">
      <div class="container">
        <div class="section-header">
          <div class="section-eyebrow">
            <app-icon name="layers" [size]="14"></app-icon>
            <span>{{ t().education.eyebrow }}</span>
          </div>
          <h2 class="section-title">{{ t().education.title }}</h2>
          <p class="section-subtitle">{{ t().education.subtitle }}</p>
        </div>

        <h3 class="block-title">{{ t().education.educationTitle }}</h3>
        <div class="dim-siblings edu-list">
          @for (edu of t().education.items; track edu.id) {
            <article class="surface edu-card" [class.live]="edu.status === 'in-progress'">
              <app-company-logo
                [logoKey]="eduBrand(edu.id).logoKey"
                [logoUrl]="eduBrand(edu.id).logoUrl"
                [label]="edu.institution"
                [size]="52">
              </app-company-logo>
              <div class="edu-body">
                <div class="edu-top">
                  <h4>{{ edu.degree }}</h4>
                  <span class="status" [class.live]="edu.status === 'in-progress'">
                    {{ edu.status === 'in-progress' ? t().education.inProgress : t().education.completed }}
                  </span>
                </div>
                <p class="institution">{{ edu.institution }}</p>
                <div class="facts">
                  <span>{{ edu.period }}</span>
                  <span class="sep">·</span>
                  <span>{{ edu.location }}</span>
                </div>
                <p class="desc">{{ edu.description }}</p>
              </div>
            </article>
          }
        </div>

        <div class="cert-head">
          <h3 class="block-title">
            {{ t().education.certificationsTitle }}
            <span class="total">{{ t().education.certifications.length }}</span>
          </h3>
          <div class="filters" role="tablist">
            @for (f of filters(); track f.issuer) {
              <button
                type="button"
                class="chip"
                role="tab"
                [class.active]="filter() === f.issuer"
                [attr.aria-selected]="filter() === f.issuer"
                (click)="setFilter(f.issuer)">
                @if (f.issuer !== 'all') {
                  <app-company-logo [logoKey]="certBrand(f.issuer).logoKey" [logoUrl]="certBrand(f.issuer).logoUrl" [label]="f.issuer" [size]="18"></app-company-logo>
                }
                <span>{{ f.issuer === 'all' ? t().education.filterAll : f.issuer }}</span>
                <span class="chip-count">{{ f.count }}</span>
              </button>
            }
          </div>
        </div>

        <div class="dim-siblings cert-grid">
          @for (cert of visibleCerts(); track cert.id; let i = $index) {
            <article class="surface cert-card" [style.--i]="i % 9">
              <app-company-logo
                [logoKey]="certBrand(cert.issuer).logoKey"
                [logoUrl]="certBrand(cert.issuer).logoUrl"
                [label]="cert.issuer"
                [size]="42">
              </app-company-logo>
              <div class="cert-body">
                <h4>{{ cert.name }}</h4>
                <p class="issuer">{{ cert.issuer }} <span class="sep">·</span> <span class="issued">{{ cert.issued }}</span></p>
                @if (cert.credentialId) {
                  <p class="cred-id">ID: {{ cert.credentialId }}</p>
                }
                @if (cert.credentialUrl) {
                  <a [href]="cert.credentialUrl" target="_blank" rel="noopener noreferrer" class="cred-link">
                    {{ t().education.viewCredential }}
                    <app-icon name="external-link" [size]="13"></app-icon>
                  </a>
                }
              </div>
            </article>
          }
        </div>

        @if (filteredCerts().length > pageSize) {
          <div class="more-wrap">
            <button type="button" class="btn btn-ghost" (click)="expanded.set(!expanded())">
              <span>{{ expanded() ? t().education.showLess : t().education.showAll }}</span>
              @if (!expanded()) {
                <span class="more-count">+{{ filteredCerts().length - pageSize }}</span>
              }
            </button>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .layout {
      display: grid;
      gap: 2.5rem;
    }
    @media (min-width: 1024px) {
      .layout {
        grid-template-columns: 1.15fr 0.85fr;
        gap: 2rem;
        align-items: start;
      }
    }
    .block-title {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-family: var(--font-mono);
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: rgba(226, 232, 240, 0.45);
      margin-bottom: 1rem;
    }
    .total {
      padding: 0.1rem 0.45rem;
      border-radius: 999px;
      background: #5eead4;
      color: #0f172a;
      font-weight: 700;
      letter-spacing: 0;
    }
    .edu-list {
      display: grid;
      gap: 0.9rem;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
      margin-bottom: 3.5rem;
    }
    .edu-card,
    .cert-card {
      display: flex;
      gap: 0.95rem;
      padding: 1.15rem;
      align-items: flex-start;
    }
    .edu-card.live {
      border-color: rgba(94, 234, 212, 0.45);
      background: linear-gradient(135deg, rgba(30, 64, 175, 0.45), rgba(30, 41, 59, 0.72));
    }
    .edu-card:hover { transform: translateY(-3px); }

    .cert-head {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem 1.5rem;
      margin-bottom: 1.25rem;
    }
    .cert-head .block-title { margin-bottom: 0; }
    .filters { display: flex; flex-wrap: wrap; gap: 0.45rem; }
    .chip {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.3rem 0.65rem 0.3rem 0.35rem;
      border-radius: 999px;
      border: 1px solid rgba(226, 232, 240, 0.14);
      background: rgba(15, 23, 42, 0.6);
      color: rgba(226, 232, 240, 0.7);
      font-size: 0.78rem;
      transition: background 0.25s var(--ease-out), border-color 0.25s, color 0.25s, transform 0.25s var(--ease-out);
    }
    .chip:first-child { padding-left: 0.75rem; }
    .chip:hover { border-color: rgba(94, 234, 212, 0.5); color: #e2e8f0; transform: translateY(-1px); }
    .chip.active { background: #5eead4; border-color: #5eead4; color: #0f172a; font-weight: 600; }
    .chip-count {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      padding: 0.05rem 0.35rem;
      border-radius: 999px;
      background: rgba(226, 232, 240, 0.1);
    }
    .chip.active .chip-count { background: rgba(15, 23, 42, 0.2); }

    .cert-grid {
      display: grid;
      gap: 0.85rem;
      grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
    }
    .cert-card {
      animation: cert-in 0.5s var(--ease-out) backwards;
      animation-delay: calc(var(--i, 0) * 45ms);
    }
    .cert-card:hover { transform: translateY(-3px); }
    @keyframes cert-in {
      from { opacity: 0; transform: translateY(14px) scale(0.97); }
      to { opacity: 1; transform: none; }
    }
    .edu-card:hover h4, .cert-card:hover h4 { color: #5eead4; }
    .edu-top h4, .cert-body h4 { transition: color 0.2s var(--ease-out); }
    .issued { color: rgba(226, 232, 240, 0.5); font-weight: 400; }
    .more-wrap { display: flex; justify-content: center; margin-top: 1.75rem; }
    .more-count {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      padding: 0.1rem 0.4rem;
      border-radius: 999px;
      background: rgba(94, 234, 212, 0.2);
    }
    .edu-card:hover,
    .cert-card:hover {
      border-color: rgba(94, 234, 212, 0.4);
    }
    .edu-body,
    .cert-body {
      flex: 1;
      min-width: 0;
    }
    .edu-top {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0.5rem;
      margin-bottom: 0.25rem;
    }
    .edu-top h4,
    .cert-body h4 {
      font-size: 1rem;
      color: #e2e8f0;
      font-family: var(--font-display);
      line-height: 1.25;
    }
    .status {
      font-family: var(--font-mono);
      font-size: 0.62rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      padding: 0.18rem 0.45rem;
      border-radius: 0.2rem;
      border: 1px solid rgba(226, 232, 240, 0.15);
      color: rgba(226, 232, 240, 0.55);
      white-space: nowrap;
    }
    .status.live {
      background: rgba(94, 234, 212, 0.18);
      border-color: rgba(94, 234, 212, 0.45);
      color: #5eead4;
      font-weight: 700;
    }
    .institution,
    .issuer {
      font-size: 0.88rem;
      color: #5eead4;
      font-weight: 560;
      margin-bottom: 0.25rem;
    }
    .facts {
      display: flex;
      flex-wrap: wrap;
      gap: 0.3rem;
      font-family: var(--font-mono);
      font-size: 0.7rem;
      color: rgba(226, 232, 240, 0.45);
      margin-bottom: 0.55rem;
    }
    .sep { opacity: 0.5; }
    .desc {
      font-size: 0.84rem;
      color: rgba(226, 232, 240, 0.6);
      line-height: 1.55;
    }
    .cred-id {
      font-family: var(--font-mono);
      font-size: 0.65rem;
      color: rgba(226, 232, 240, 0.38);
      margin-bottom: 0.45rem;
      word-break: break-all;
    }
    .cred-link {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-family: var(--font-mono);
      font-size: 0.72rem;
      font-weight: 600;
      color: rgba(226, 232, 240, 0.7);
    }
    .cred-link:hover { color: #5eead4; }
  `]
})
export class EducationComponent {
  public readonly i18n = inject(I18nService);
  public readonly t = this.i18n.t;

  public readonly pageSize = 9;
  public readonly filter = signal<string>('all');
  public readonly expanded = signal(false);

  public readonly filters = computed(() => {
    const certs = this.t().education.certifications;
    const counts = new Map<string, number>();
    for (const c of certs) counts.set(c.issuer, (counts.get(c.issuer) ?? 0) + 1);
    return [
      { issuer: 'all', count: certs.length },
      ...[...counts].map(([issuer, count]) => ({ issuer, count })).sort((a, b) => b.count - a.count)
    ];
  });

  public readonly filteredCerts = computed(() => {
    const f = this.filter();
    const certs = this.t().education.certifications;
    return f === 'all' ? certs : certs.filter(c => c.issuer === f);
  });

  public readonly visibleCerts = computed(() =>
    this.expanded() ? this.filteredCerts() : this.filteredCerts().slice(0, this.pageSize)
  );

  public setFilter(issuer: string): void {
    this.filter.set(issuer);
    this.expanded.set(false);
  }

  public eduBrand(id: string) {
    return educationBrands[id] ?? { logoKey: 'university' };
  }

  public certBrand(issuer: string) {
    return certificationBrands[issuer] ?? { logoKey: 'default' };
  }
}
