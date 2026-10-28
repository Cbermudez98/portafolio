import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/services/i18n.service';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="projects" class="section section-alt">
      <div class="container">
        <a
          class="gh-card reveal"
          [href]="data.personalInfo.github"
          target="_blank"
          rel="noopener noreferrer">
          <div class="gh-glow" aria-hidden="true"></div>

          <div class="gh-copy">
            <div class="section-eyebrow">
              <app-icon name="code" [size]="14"></app-icon>
              <span>{{ t().projects.eyebrow }}</span>
            </div>
            <h2 class="section-title">{{ t().projects.title }}</h2>
            <p class="section-subtitle">{{ t().projects.subtitle }}</p>

            <div class="focus">
              @for (item of t().projects.focus; track item; let i = $index) {
                <span class="tech-tag" [style.--i]="i">{{ item }}</span>
              }
            </div>

            <span class="btn btn-primary gh-cta">
              <app-icon name="github" [size]="17"></app-icon>
              <span>{{ t().projects.cta }}</span>
              <app-icon name="arrow-right" [size]="15" class="cta-arrow"></app-icon>
            </span>
          </div>

          <div class="gh-visual" aria-hidden="true">
            <div class="gh-orbit">
              <span class="ring r1"></span>
              <span class="ring r2"></span>
              <span class="ring r3"></span>
              <div class="gh-mark">
                <app-icon name="github" [size]="56" color="#E2E8F0"></app-icon>
              </div>
            </div>
            <div class="gh-handle">
              <span class="prompt">$</span> github.com/<strong>{{ data.personalInfo.handle }}</strong>
              <span class="caret"></span>
            </div>
            <span class="gh-caption">{{ t().projects.reposLabel }}</span>
          </div>
        </a>
      </div>
    </section>
  `,
  styles: [`
    .gh-card {
      position: relative;
      display: grid;
      grid-template-columns: 1fr;
      gap: 2.5rem;
      align-items: center;
      padding: clamp(1.75rem, 4vw, 3rem);
      border-radius: 0.6rem;
      overflow: hidden;
      background:
        linear-gradient(135deg, rgba(30, 64, 175, 0.55), rgba(15, 23, 42, 0.85) 55%, rgba(19, 78, 74, 0.55));
      border: 1px solid rgba(94, 234, 212, 0.3);
      transition: border-color 0.3s var(--ease-out), transform 0.4s var(--ease-out), box-shadow 0.4s var(--ease-out);
    }
    @media (min-width: 900px) {
      .gh-card { grid-template-columns: 1.3fr 1fr; }
    }
    .gh-card:hover {
      border-color: rgba(94, 234, 212, 0.6);
      transform: translateY(-4px);
      box-shadow: var(--shadow-lift);
    }
    .gh-glow {
      position: absolute;
      width: 420px;
      height: 420px;
      right: -120px;
      top: -160px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(94, 234, 212, 0.35), transparent 65%);
      animation: soft-drift 9s ease-in-out infinite;
      pointer-events: none;
    }
    .gh-copy { position: relative; z-index: 1; }
    .gh-copy .section-subtitle { max-width: 520px; }
    .focus {
      display: flex;
      flex-wrap: wrap;
      gap: 0.45rem;
      margin: 1.5rem 0 1.8rem;
    }
    .gh-cta .cta-arrow { transition: transform 0.3s var(--ease-out); }
    .gh-card:hover .gh-cta { background: #99f6e4; }
    .gh-card:hover .cta-arrow { transform: translateX(4px); }

    .gh-visual {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.25rem;
    }
    .gh-orbit {
      position: relative;
      width: 220px;
      height: 220px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ring {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      border: 1px dashed rgba(226, 232, 240, 0.18);
      animation: spin 28s linear infinite;
    }
    .ring::after {
      content: "";
      position: absolute;
      top: -4px;
      left: 50%;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #5eead4;
      box-shadow: 0 0 12px rgba(94, 234, 212, 0.8);
    }
    .r2 { inset: 28px; animation-duration: 18s; animation-direction: reverse; border-color: rgba(19, 78, 74, 0.7); }
    .r2::after { background: #94a3b8; box-shadow: 0 0 12px rgba(148, 163, 184, 0.8); }
    .r3 { inset: 56px; animation-duration: 12s; border-style: solid; border-color: rgba(94, 234, 212, 0.25); }
    .gh-mark {
      width: 92px;
      height: 92px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: radial-gradient(circle at 30% 30%, #1e40af, #0f172a);
      border: 1px solid rgba(94, 234, 212, 0.5);
      box-shadow: 0 0 0 8px rgba(94, 234, 212, 0.08);
      transition: transform 0.5s var(--ease-out);
    }
    .gh-card:hover .gh-mark { transform: scale(1.08) rotate(-6deg); }
    .gh-handle {
      font-family: var(--font-mono);
      font-size: 0.85rem;
      color: rgba(226, 232, 240, 0.7);
      padding: 0.55rem 0.9rem;
      border-radius: 0.3rem;
      background: rgba(15, 23, 42, 0.7);
      border: 1px solid rgba(226, 232, 240, 0.1);
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
      max-width: 100%;
      overflow-wrap: anywhere;
    }
    .gh-handle strong { color: #5eead4; font-weight: 600; }
    .prompt { color: #94a3b8; }
    .caret {
      width: 7px;
      height: 1em;
      background: #5eead4;
      animation: blink 1s steps(1) infinite;
    }
    .gh-caption {
      font-family: var(--font-mono);
      font-size: 0.68rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: rgba(226, 232, 240, 0.42);
      text-align: center;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes blink { 50% { opacity: 0; } }
    @media (prefers-reduced-motion: reduce) {
      .ring, .caret, .gh-glow { animation: none; }
    }
  `]
})
export class ProjectsComponent {
  public readonly i18n = inject(I18nService);
  public readonly data = inject(PortfolioDataService);
  public readonly t = this.i18n.t;
}
