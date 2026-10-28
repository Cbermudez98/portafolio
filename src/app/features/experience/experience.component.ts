import { Component, DestroyRef, ElementRef, afterNextRender, computed, inject, signal, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/services/i18n.service';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { CompanyLogoComponent } from '../../shared/components/company-logo/company-logo.component';
import { CompanyBrand, experienceBrands } from '../../core/services/company-brands';
import { TranslationsType } from '../../core/i18n/translations';
import { groupByCompany } from '../../core/utils/experience-groups';

type ExperienceEntry = TranslationsType['experience']['items'][number];

interface TimelineEntry {
  key: string;
  title: string;
  logoKey: string;
  logoUrl?: string;
  current: boolean;
  period: string;
  location: string;
  roles: ExperienceEntry[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, IconComponent, CompanyLogoComponent],
  template: `
    <section id="experience" class="section">
      <div class="container">
        <div class="section-header center">
          <div class="section-eyebrow">
            <app-icon name="activity" [size]="14"></app-icon>
            <span>{{ t().experience.eyebrow }}</span>
          </div>
          <h2 class="section-title">{{ t().experience.title }}</h2>
          <p class="section-subtitle">{{ t().experience.subtitle }}</p>
        </div>

        <ol class="timeline reveal-line" #timeline [style.--progress]="progress()">
          <span class="spine" aria-hidden="true"><span class="spine-fill"></span></span>

          @for (entry of entries(); track entry.key; let idx = $index; let odd = $odd) {
            <li class="entry reveal-line" [class.right]="odd" [class.left]="!odd" [class.current]="entry.current">
              <!-- center node -->
              <div class="node">
                <app-company-logo
                  [logoKey]="entry.logoKey"
                  [logoUrl]="entry.logoUrl"
                  [label]="entry.title"
                  [size]="54">
                </app-company-logo>
                @if (entry.current) {
                  <span class="live-dot" aria-hidden="true"></span>
                }
              </div>

              <!-- date on the opposite side -->
              <div class="date">
                <span class="date-period">{{ entry.period }}</span>
                <span class="date-loc">
                  <app-icon name="globe" [size]="12"></app-icon>
                  {{ entry.location }}
                </span>
              </div>

              <article class="surface card">
                <span class="connector" aria-hidden="true"></span>

                <header class="card-head">
                  <div class="title-row">
                    <h3>{{ entry.title }}</h3>
                    @if (entry.current) {
                      <span class="badge">{{ t().experience.currentLabel }}</span>
                    }
                  </div>
                  <div class="facts mobile-only">
                    <span>{{ entry.period }}</span>
                    <span class="sep">·</span>
                    <span>{{ entry.location }}</span>
                  </div>
                </header>

                <ol class="roles" [class.multi]="entry.roles.length > 1">
                  @for (role of entry.roles; track role.id) {
                    <li class="role" [class.open]="isOpen(role.id)">
                      @if (entry.roles.length > 1) {
                        <span class="role-node" [class.current]="isCurrent(role.id)"></span>
                      }

                      <button
                        type="button"
                        class="role-head"
                        (click)="toggle(role.id)"
                        [attr.aria-expanded]="isOpen(role.id)">
                        <div class="role-main">
                          <h4>{{ role.role }}</h4>
                          <div class="role-facts">
                            @if (entry.roles.length > 1) {
                              <span>{{ role.period }}</span>
                              <span class="sep">·</span>
                            }
                            <span>{{ role.type }}</span>
                          </div>
                        </div>
                        <span class="chevron" aria-hidden="true">
                          <app-icon name="arrow-right" [size]="14"></app-icon>
                        </span>
                      </button>

                      <p class="summary">{{ role.description }}</p>

                      <div class="details" [attr.aria-hidden]="!isOpen(role.id)">
                        <div class="details-inner">
                          <span class="details-label">{{ t().experience.impactLabel }}</span>
                          <ul>
                            @for (item of role.achievements; track item; let i = $index) {
                              <li [style.--i]="i">{{ item }}</li>
                            }
                          </ul>
                          <div class="tags">
                            @for (tech of role.technologies; track tech; let i = $index) {
                              <span class="tech-tag" [style.--i]="i">{{ tech }}</span>
                            }
                          </div>
                        </div>
                      </div>
                    </li>
                  }
                </ol>
              </article>
            </li>
          }
        </ol>
      </div>
    </section>
  `,
  styles: [`
    /* ---------- layout: centered spine, alternating sides ---------- */
    .timeline {
      --node: 64px;
      list-style: none;
      position: relative;
      max-width: 1080px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 2.75rem;
      padding: 1rem 0;
    }
    .spine {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 2px;
      transform: translateX(-50%);
      background: rgba(226, 232, 240, 0.08);
      border-radius: 2px;
      overflow: hidden;
    }
    .spine-fill {
      position: absolute;
      inset: 0;
      transform-origin: top;
      transform: scaleY(var(--progress, 1));
      background: linear-gradient(180deg, #5eead4 0%, #1e40af 60%, #134e4a 100%);
      box-shadow: 0 0 12px rgba(94, 234, 212, 0.6);
      transition: transform 0.15s linear;
    }

    .entry {
      transition: opacity 0.3s var(--ease-out);
      position: relative;
      display: grid;
      grid-template-columns: 1fr var(--node) 1fr;
      column-gap: 2rem;
      align-items: start;
    }
    .node {
      grid-column: 2;
      grid-row: 1;
      position: relative;
      z-index: 2;
      justify-self: center;
      margin-top: 0.4rem;
      border-radius: 0.5rem;
      box-shadow: 0 0 0 6px var(--bg-primary), 0 0 0 7px rgba(94, 234, 212, 0.35);
      transition: transform 0.4s var(--ease-out), box-shadow 0.4s var(--ease-out);
    }
    .entry:hover .node {
      transform: scale(1.08) rotate(-3deg);
      box-shadow: 0 0 0 6px var(--bg-primary), 0 0 0 8px #5eead4, 0 0 30px rgba(94, 234, 212, 0.45);
    }
    .live-dot {
      position: absolute;
      right: -5px;
      bottom: -5px;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #5eead4;
      border: 2px solid var(--bg-primary);
    }
    .live-dot::after {
      content: "";
      position: absolute;
      inset: -4px;
      border-radius: 50%;
      border: 2px solid rgba(94, 234, 212, 0.6);
      animation: pulse-ring 2.2s var(--ease-out) infinite;
    }

    .card { grid-row: 1; position: relative; padding: 1.3rem 1.4rem 0.6rem; }
    .date { grid-row: 1; padding-top: 0.85rem; display: flex; flex-direction: column; gap: 0.35rem; }
    .entry.left .card { grid-column: 1; }
    .entry.left .date { grid-column: 3; align-items: flex-start; }
    .entry.right .card { grid-column: 3; }
    .entry.right .date { grid-column: 1; align-items: flex-end; text-align: right; }

    .date-period {
      font-family: var(--font-display);
      font-size: clamp(1.15rem, 2vw, 1.5rem);
      font-weight: 600;
      color: #e2e8f0;
      letter-spacing: -0.02em;
      line-height: 1.2;
    }
    .entry.current .date-period { color: #5eead4; }
    .date-loc {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      font-family: var(--font-mono);
      font-size: 0.72rem;
      color: rgba(226, 232, 240, 0.48);
    }

    /* arrow connecting card to spine */
    .connector {
      position: absolute;
      top: 1.65rem;
      width: 14px;
      height: 14px;
      background: inherit;
      border: inherit;
      transform: rotate(45deg);
    }
    .entry.left .connector { right: -8px; border-left: none; border-bottom: none; }
    .entry.right .connector { left: -8px; border-right: none; border-top: none; }

    .card::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      width: 3px;
      background: linear-gradient(180deg, #5eead4, #1e40af);
      opacity: 0.35;
      transition: opacity 0.3s var(--ease-out);
    }
    .entry.left .card::before { right: 0; }
    .entry.right .card::before { left: 0; }
    .entry.current .card::before,
    .card:hover::before { opacity: 1; }
    .card:hover {
      border-color: rgba(94, 234, 212, 0.4);
      box-shadow: var(--shadow-soft);
    }
    .entry.left .card:hover { transform: translate(-4px, -3px); }
    .entry.right .card:hover { transform: translate(4px, -3px); }

    @media (hover: hover) {
      .timeline:hover .entry:not(:hover) { opacity: 0.5; }
    }
    .card:hover .title-row h3 { color: #5eead4; }
    .title-row h3 { transition: color 0.2s var(--ease-out); }

    /* ---------- card content ---------- */
    .card-head {
      padding-bottom: 0.85rem;
      border-bottom: 1px solid rgba(226, 232, 240, 0.08);
    }
    .title-row { display: flex; flex-wrap: wrap; align-items: center; gap: 0.55rem; }
    .title-row h3 { font-size: 1.2rem; color: #e2e8f0; }
    .badge {
      font-family: var(--font-mono);
      font-size: 0.62rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #0f172a;
      background: #5eead4;
      padding: 0.18rem 0.45rem;
      border-radius: 0.2rem;
      font-weight: 700;
    }
    .facts, .role-facts {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 0.3rem;
      font-family: var(--font-mono);
      font-size: 0.7rem;
      color: rgba(226, 232, 240, 0.48);
    }
    .facts { margin-top: 0.45rem; }
    .mobile-only { display: none; }
    .sep { opacity: 0.5; }

    .roles { list-style: none; position: relative; }
    .roles.multi { padding-left: 1.35rem; }
    .roles.multi::before {
      content: "";
      position: absolute;
      left: 0.3rem;
      top: 1.6rem;
      bottom: 1.6rem;
      width: 1px;
      background: rgba(94, 234, 212, 0.35);
    }
    .role { position: relative; padding: 0.35rem 0 0.55rem; }
    .role + .role { border-top: 1px dashed rgba(226, 232, 240, 0.08); }
    .role-node {
      position: absolute;
      left: calc(-1.35rem + 0.3rem - 5px);
      top: 1.35rem;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: #0f172a;
      border: 2px solid #5eead4;
      transition: transform 0.3s var(--ease-out);
    }
    .role-node.current { background: #5eead4; box-shadow: 0 0 0 4px rgba(94, 234, 212, 0.2); }
    .role.open .role-node { transform: scale(1.25); }

    .role-head {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 0.85rem;
      padding: 0.75rem 0 0.4rem;
      text-align: left;
      color: inherit;
    }
    .role-main { flex: 1; min-width: 0; }
    .role-main h4 {
      font-size: 1rem;
      color: #e2e8f0;
      margin-bottom: 0.2rem;
      transition: color 0.2s var(--ease-out);
    }
    .role-head:hover h4 { color: #5eead4; }
    .role-head:focus-visible { outline: 2px solid #5eead4; outline-offset: 4px; border-radius: 0.25rem; }
    .chevron {
      width: 1.9rem;
      height: 1.9rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      border: 1px solid rgba(226, 232, 240, 0.12);
      color: rgba(226, 232, 240, 0.55);
      flex-shrink: 0;
      transition: transform 0.35s var(--ease-out), background 0.25s, color 0.25s, border-color 0.25s;
    }
    .role-head:hover .chevron { border-color: rgba(94, 234, 212, 0.5); color: #5eead4; }
    .role.open .chevron { transform: rotate(90deg); background: #5eead4; border-color: #5eead4; color: #0f172a; }
    .summary { font-size: 0.88rem; color: rgba(226, 232, 240, 0.65); line-height: 1.6; }

    .details { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.45s var(--ease-out); }
    .role.open .details { grid-template-rows: 1fr; }
    .details-inner { overflow: hidden; min-height: 0; }
    .details-label {
      display: block;
      margin: 1rem 0 0.65rem;
      font-family: var(--font-mono);
      font-size: 0.66rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: rgba(226, 232, 240, 0.42);
    }
    .details ul { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 0.9rem; }
    .details li {
      position: relative;
      padding-left: 0.95rem;
      font-size: 0.84rem;
      color: rgba(226, 232, 240, 0.72);
      line-height: 1.55;
    }
    .details li::before {
      content: "";
      position: absolute;
      left: 0;
      top: 0.5rem;
      width: 0.35rem;
      height: 0.35rem;
      border-radius: 50%;
      background: #5eead4;
    }
    .details li, .details .tech-tag {
      opacity: 0;
      transform: translateY(6px);
      transition: opacity 0.4s var(--ease-out), transform 0.4s var(--ease-out);
    }
    .role.open .details li, .role.open .details .tech-tag { opacity: 1; transform: none; }
    .role.open .details li { transition-delay: calc(0.12s + var(--i, 0) * 0.06s); }
    .role.open .details .tech-tag { transition-delay: calc(0.3s + var(--i, 0) * 0.03s); }
    .tags { display: flex; flex-wrap: wrap; gap: 0.4rem; padding-bottom: 0.5rem; }

    /* ---------- entrance animations (only once reveal system is active) ---------- */
    :host-context(.reveal-ready) .entry .card,
    :host-context(.reveal-ready) .entry .date,
    :host-context(.reveal-ready) .entry .node {
      transition:
        opacity 0.8s var(--ease-out),
        transform 0.8s var(--ease-out),
        border-color 0.25s var(--ease-out),
        box-shadow 0.3s var(--ease-out);
    }
    :host-context(.reveal-ready) .entry:not(.is-visible) .card,
    :host-context(.reveal-ready) .entry:not(.is-visible) .date { opacity: 0; }
    :host-context(.reveal-ready) .entry.left:not(.is-visible) .card { transform: translateX(-60px) rotate(-1.5deg); }
    :host-context(.reveal-ready) .entry.right:not(.is-visible) .card { transform: translateX(60px) rotate(1.5deg); }
    :host-context(.reveal-ready) .entry.left:not(.is-visible) .date { transform: translateX(40px); }
    :host-context(.reveal-ready) .entry.right:not(.is-visible) .date { transform: translateX(-40px); }
    :host-context(.reveal-ready) .entry:not(.is-visible) .node { opacity: 0; transform: scale(0.3) rotate(-25deg); }
    :host-context(.reveal-ready) .entry.is-visible .node { animation: node-pop 0.7s var(--ease-out); }
    :host-context(.reveal-ready) .entry.is-visible .date { transition-delay: 0.15s; }

    @keyframes node-pop {
      0% { transform: scale(0.3) rotate(-25deg); opacity: 0; }
      60% { transform: scale(1.15) rotate(4deg); opacity: 1; }
      100% { transform: scale(1) rotate(0); }
    }

    /* ---------- mobile: single rail on the left ---------- */
    @media (max-width: 860px) {
      .timeline { --node: 54px; gap: 1.75rem; }
      .spine { left: calc(var(--node) / 2); }
      .entry { grid-template-columns: var(--node) 1fr; column-gap: 1rem; }
      .node { grid-column: 1; margin-top: 0.2rem; }
      .entry.left .card, .entry.right .card { grid-column: 2; }
      .date { display: none; }
      .mobile-only { display: flex; }
      .entry.left .connector, .entry.right .connector { left: -8px; right: auto; border: inherit; border-right: none; border-top: none; }
      .entry.left .card::before { left: 0; right: auto; }
      .card { padding: 1rem 1rem 0.5rem; }
      :host-context(.reveal-ready) .entry.left:not(.is-visible) .card,
      :host-context(.reveal-ready) .entry.right:not(.is-visible) .card { transform: translateX(40px); }
      .entry.left .card:hover, .entry.right .card:hover { transform: translateY(-3px); }
    }

    @media (prefers-reduced-motion: reduce) {
      .spine-fill { transform: none; }
      .details, .details li, .details .tech-tag, .chevron { transition: none; }
    }
  `]
})
export class ExperienceComponent {
  public readonly i18n = inject(I18nService);
  public readonly t = this.i18n.t;
  public readonly progress = signal(1);

  private readonly timeline = viewChild<ElementRef<HTMLElement>>('timeline');
  private readonly openIds = signal<ReadonlySet<string>>(new Set(['globant-aci']));

  /** One timeline entry per company; consecutive roles at the same company are grouped. */
  public readonly entries = computed<TimelineEntry[]>(() =>
    groupByCompany(this.t().experience.items).map(group => {
      const brand = this.brand(group.roles[0].id);
      return {
        key: group.company,
        title: group.company,
        logoKey: brand.logoKey,
        logoUrl: brand.logoUrl,
        current: group.roles.some(role => this.isCurrent(role.id)),
        period: group.period,
        location: group.location,
        roles: group.roles
      };
    })
  );

  constructor() {
    const destroyRef = inject(DestroyRef);
    afterNextRender(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      let frame = 0;
      const update = () => {
        frame = 0;
        const el = this.timeline()?.nativeElement;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const anchor = window.innerHeight * 0.6;
        this.progress.set(Math.min(Math.max((anchor - rect.top) / rect.height, 0), 1));
      };
      const onScroll = () => (frame ||= requestAnimationFrame(update));
      update();
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });
      destroyRef.onDestroy(() => {
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('resize', onScroll);
        cancelAnimationFrame(frame);
      });
    });
  }

  public brand(id: string): CompanyBrand {
    return experienceBrands[id] ?? { logoKey: 'default' };
  }

  public isCurrent(id: string): boolean {
    return !!experienceBrands[id]?.current;
  }

  public isOpen(id: string): boolean {
    return this.openIds().has(id);
  }

  public toggle(id: string): void {
    this.openIds.update(ids => {
      const next = new Set(ids);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }
}
