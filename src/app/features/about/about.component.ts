import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/services/i18n.service';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="about" class="section section-alt">
      <div class="container">
        <div class="section-header">
          <div class="section-eyebrow">
            <app-icon name="shield" [size]="14"></app-icon>
            <span>{{ t().about.eyebrow }}</span>
          </div>
          <h2 class="section-title">{{ t().about.title }}</h2>
          <p class="section-subtitle">{{ t().about.intro }}</p>
        </div>

        <div class="about-grid">
          <div class="about-story">
            <article class="surface story">
              <h3 class="story-title">
                <span class="accent-bar"></span>
                {{ t().about.journeyTitle }}
              </h3>
              <p class="story-p">{{ t().about.p1 }}</p>
              <p class="story-p muted">{{ t().about.p2 }}</p>

              <ul class="dim-siblings highlights">
                @for (item of t().about.highlights; track item; let last = $last) {
                  <li [class.feature]="last">
                    <span class="check">
                      <app-icon [name]="last ? 'globe' : 'check'" [size]="13" [color]="last ? '#E2E8F0' : '#5EEAD4'"></app-icon>
                    </span>
                    <span>{{ item }}</span>
                  </li>
                }
              </ul>
            </article>

            <blockquote class="quote">
              <span class="quote-mark">“</span>
              <p>{{ t().about.quote }}</p>
              <cite>— Cesar Bermudez Sierra</cite>
            </blockquote>
          </div>

          <div>
            <h3 class="principles-title">{{ t().about.principlesTitle }}</h3>
            <div class="dim-siblings principles">
              @for (principle of t().about.principles; track principle.title) {
                <article class="surface principle">
                  <div class="principle-icon">
                    <app-icon [name]="principle.icon" [size]="20" color="#5EEAD4"></app-icon>
                  </div>
                  <h4>{{ principle.title }}</h4>
                  <p>{{ principle.description }}</p>
                  <span class="principle-meta">{{ t().about.principleMeta }}</span>
                </article>
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-grid {
      display: grid;
      gap: 2rem;
    }
    @media (min-width: 1024px) {
      .about-grid {
        grid-template-columns: 1fr 1fr;
        gap: 2.5rem;
        align-items: start;
      }
    }
    .about-story {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }
    .story {
      padding: clamp(1.5rem, 3vw, 2.25rem);
    }
    .story-title {
      display: flex;
      align-items: center;
      gap: 0.65rem;
      font-size: 1.35rem;
      margin-bottom: 1.25rem;
      color: #e2e8f0;
    }
    .accent-bar {
      width: 0.35rem;
      height: 1.3rem;
      border-radius: 999px;
      background: linear-gradient(180deg, #5eead4, #1e40af);
    }
    .story-p {
      font-size: 0.97rem;
      color: rgba(226, 232, 240, 0.8);
      line-height: 1.75;
      margin-bottom: 1rem;
    }
    .story-p.muted {
      color: rgba(226, 232, 240, 0.6);
      margin-bottom: 0;
    }
    .highlights {
      list-style: none;
      margin-top: 1.6rem;
      padding-top: 1.4rem;
      border-top: 1px solid rgba(226, 232, 240, 0.1);
      display: grid;
      gap: 0.65rem;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
    }
    .highlights li {
      display: flex;
      align-items: flex-start;
      gap: 0.6rem;
      padding: 0.75rem 0.85rem;
      border-radius: 0.35rem;
      background: rgba(15, 23, 42, 0.55);
      border: 1px solid rgba(226, 232, 240, 0.08);
      font-size: 0.84rem;
      line-height: 1.45;
      color: rgba(226, 232, 240, 0.8);
      transition: border-color 0.25s var(--ease-out), transform 0.25s var(--ease-out);
    }
    .highlights li:hover {
      border-color: rgba(94, 234, 212, 0.4);
      transform: translateY(-2px);
    }
    .highlights li.feature {
      background: rgba(19, 78, 74, 0.45);
      border-color: rgba(19, 78, 74, 0.9);
      color: #e2e8f0;
      font-weight: 560;
    }
    .check {
      flex-shrink: 0;
      width: 1.5rem;
      height: 1.5rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: rgba(94, 234, 212, 0.15);
      border: 1px solid rgba(94, 234, 212, 0.35);
    }
    .feature .check {
      background: rgba(94, 234, 212, 0.85);
      border-color: #5eead4;
    }
    .quote {
      margin: 0;
      padding: 1.5rem 1.75rem;
      border-radius: 0.35rem;
      background: linear-gradient(145deg, rgba(30, 64, 175, 0.35), rgba(19, 78, 74, 0.25));
      border: 1px solid rgba(94, 234, 212, 0.28);
      border-left: 3px solid #5eead4;
    }
    .quote p {
      color: rgba(226, 232, 240, 0.82);
      font-size: 0.95rem;
      font-style: italic;
      line-height: 1.7;
    }
    .quote-mark {
      display: block;
      font-family: var(--font-display);
      font-size: 2.4rem;
      line-height: 1;
      color: #5eead4;
      margin-bottom: 0.25rem;
    }
    .quote cite {
      display: block;
      margin-top: 1rem;
      font-family: var(--font-mono);
      font-size: 0.7rem;
      font-style: normal;
      font-weight: 600;
      color: #5eead4;
    }
    .principles-title {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      font-weight: 500;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: rgba(226, 232, 240, 0.45);
      margin-bottom: 1rem;
    }
    .principles {
      display: grid;
      gap: 1rem;
    }
    @media (min-width: 640px) {
      .principles { grid-template-columns: 1fr 1fr; }
    }
    .principle {
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
    }
    .principle-icon {
      width: 2.6rem;
      height: 2.6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.3rem;
      background: rgba(15, 23, 42, 0.7);
      border: 1px solid rgba(94, 234, 212, 0.28);
      margin-bottom: 1rem;
    }
    .principle:hover h4 { color: #5eead4; }
    .principle h4 {
      transition: color 0.2s var(--ease-out);
      font-size: 1rem;
      margin-bottom: 0.45rem;
      color: #e2e8f0;
    }
    .principle p {
      font-size: 0.84rem;
      color: rgba(226, 232, 240, 0.55);
      line-height: 1.6;
      flex: 1;
    }
    .principle-meta {
      margin-top: 1rem;
      padding-top: 0.85rem;
      border-top: 1px solid rgba(226, 232, 240, 0.08);
      font-family: var(--font-mono);
      font-size: 0.65rem;
      color: rgba(226, 232, 240, 0.4);
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
  `]
})
export class AboutComponent {
  public readonly i18n = inject(I18nService);
  public readonly data = inject(PortfolioDataService);
  public readonly t = this.i18n.t;
}
