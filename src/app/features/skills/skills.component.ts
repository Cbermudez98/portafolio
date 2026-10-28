import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/services/i18n.service';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="skills" class="section section-alt">
      <div class="container">
        <div class="section-header">
          <div class="section-eyebrow">
            <app-icon name="code" [size]="14"></app-icon>
            <span>{{ t().skills.eyebrow }}</span>
          </div>
          <h2 class="section-title">{{ t().skills.title }}</h2>
          <p class="section-subtitle">{{ t().skills.subtitle }}</p>
        </div>

        <div class="dim-siblings groups">
          @for (group of data.skillGroups; track group.id; let i = $index) {
            <article class="surface group" [class.wide]="group.id === 'cloud' || group.id === 'ai'">
              <header class="group-head">
                <span class="group-icon">
                  <app-icon [name]="group.icon" [size]="18"></app-icon>
                </span>
                <div>
                  <h3>{{ t().skills.groups[group.id].title }}</h3>
                  <p>{{ t().skills.groups[group.id].caption }}</p>
                </div>
                <span class="group-count">{{ group.items.length }}</span>
              </header>

              <table class="tech-table">
                <thead>
                  <tr>
                    <th scope="col">{{ t().skills.techHeader }}</th>
                    <th scope="col" class="num">{{ t().skills.yearsHeader }}</th>
                  </tr>
                </thead>
                <tbody>
                  @for (item of group.items; track item.name; let j = $index) {
                    <tr [style.--j]="j">
                      <td><span class="tech-tag">{{ item.name }}</span></td>
                      <td class="num">
                        <span class="years">{{ item.years }}</span>
                        <span class="unit">{{ item.years === 1 ? t().skills.year : t().skills.years }}</span>
                      </td>
                    </tr>
                  }
                </tbody>
              </table>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .groups {
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr;
    }
    @media (min-width: 768px) {
      .groups { grid-template-columns: repeat(2, 1fr); }
    }
    @media (min-width: 1024px) {
      .groups { grid-template-columns: repeat(6, 1fr); }
      .group { grid-column: span 2; }
      .group.wide { grid-column: span 3; }
    }

    .group {
      padding: 1.4rem;
      display: flex;
      flex-direction: column;
      gap: 1.1rem;
    }
    .group-head {
      display: flex;
      align-items: flex-start;
      gap: 0.85rem;
    }
    .group-head > div { flex: 1; min-width: 0; }
    .group-icon {
      width: 2.5rem;
      height: 2.5rem;
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      background: rgba(94, 234, 212, 0.1);
      color: #5eead4;
      transition: transform 0.35s var(--ease-out), background 0.3s;
    }
    .group:hover .group-icon {
      transform: rotate(-8deg) scale(1.08);
      background: rgba(94, 234, 212, 0.18);
    }
    .group-head h3 {
      font-size: 1.05rem;
      color: #e2e8f0;
      margin-bottom: 0.15rem;
      transition: color 0.2s var(--ease-out);
    }
    .group:hover .group-head h3 { color: #5eead4; }
    .group-head p {
      font-size: 0.82rem;
      color: #94a3b8;
      line-height: 1.45;
    }
    .group-count {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      color: #64748b;
      padding-top: 0.2rem;
    }

    .tech-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.85rem;
    }
    .tech-table th {
      text-align: left;
      font-family: var(--font-mono);
      font-size: 0.64rem;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: #64748b;
      padding: 0 0.5rem 0.55rem;
      border-bottom: 1px solid rgba(148, 163, 184, 0.14);
    }
    .tech-table td {
      padding: 0.4rem 0.5rem;
      border-bottom: 1px solid rgba(148, 163, 184, 0.06);
      vertical-align: middle;
    }
    .tech-table tbody tr:last-child td { border-bottom: none; }
    .tech-table tbody tr {
      transition: background 0.2s var(--ease-out);
    }
    .tech-table tbody tr:hover { background: rgba(94, 234, 212, 0.05); }
    .tech-table .num { text-align: right; white-space: nowrap; }
    .years {
      font-family: var(--font-mono);
      font-size: 0.95rem;
      font-weight: 600;
      color: #e2e8f0;
    }
    .unit {
      margin-left: 0.3rem;
      font-size: 0.75rem;
      color: #94a3b8;
    }
    .tech-table .tech-tag {
      transition: background 0.2s var(--ease-out), transform 0.25s var(--ease-out);
    }
    .group:hover .tech-table .tech-tag {
      transform: translateX(3px);
      transition-delay: calc(var(--j, 0) * 18ms);
    }
    @media (prefers-reduced-motion: reduce) {
      .group:hover .tech-table .tech-tag, .group:hover .group-icon { transform: none; }
    }
  `]
})
export class SkillsComponent {
  public readonly i18n = inject(I18nService);
  public readonly data = inject(PortfolioDataService);
  public readonly t = this.i18n.t;
}
