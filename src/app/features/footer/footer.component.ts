import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/services/i18n.service';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { LogoComponent } from '../../shared/components/logo/logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, IconComponent, LogoComponent],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-grid">
          <div class="brand-col">
            <div class="brand">
              <app-logo [size]="36"></app-logo>
              <span class="name">Cesar Bermudez Sierra</span>
            </div>
            <p>{{ t().footer.bio }}</p>
            <div class="status">
              <span class="status-dot"></span>
              <span>{{ t().footer.status }}</span>
            </div>
          </div>

          <div class="links-col">
            <h4>{{ t().footer.quickLinks }}</h4>
            <div class="links">
              <a href="#about">{{ t().nav.about }}</a>
              <a href="#experience">{{ t().nav.experience }}</a>
              <a href="#skills">{{ t().nav.skills }}</a>
              <a href="#projects">{{ t().nav.projects }}</a>
              <a href="#contact">{{ t().nav.contact }}</a>
            </div>
          </div>

          <div class="social-col">
            <h4>{{ t().footer.socials }}</h4>
            <div class="socials">
              <a [href]="data.personalInfo.linkedin" target="_blank" rel="noopener">
                <app-icon name="linkedin" [size]="15"></app-icon>
                LinkedIn
              </a>
              <a [href]="data.personalInfo.github" target="_blank" rel="noopener">
                <app-icon name="github" [size]="15"></app-icon>
                GitHub
              </a>
              <a [href]="'mailto:' + data.personalInfo.email">
                <app-icon name="mail" [size]="15"></app-icon>
                Email
              </a>
            </div>
          </div>
        </div>

        <div class="copyright">
          <div>© {{ currentYear }} {{ t().footer.copyright }}</div>
          <a class="credit" href="https://claude.com/claude-code" target="_blank" rel="noopener noreferrer">
            {{ t().footer.builtWith }} <strong>Claude Code</strong>
            <app-icon name="external-link" [size]="11"></app-icon>
          </a>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      position: relative;
      z-index: 1;
      padding: 3.5rem 0 2.5rem;
      border-top: 1px solid rgba(226, 232, 240, 0.1);
      background: linear-gradient(180deg, rgba(12, 19, 36, 0.9), #0a1120);
    }
    .footer-grid {
      display: grid;
      gap: 2rem;
      padding-bottom: 2rem;
      border-bottom: 1px solid rgba(226, 232, 240, 0.08);
    }
    @media (min-width: 768px) {
      .footer-grid {
        grid-template-columns: 1.3fr 1fr 0.8fr;
        gap: 2.5rem;
      }
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 0.7rem;
      margin-bottom: 0.9rem;
    }
    .name {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 1.05rem;
      color: #e2e8f0;
    }
    .brand-col p {
      font-size: 0.85rem;
      color: rgba(226, 232, 240, 0.5);
      line-height: 1.65;
      max-width: 22rem;
      margin-bottom: 0.9rem;
    }
    .status {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      font-family: var(--font-mono);
      font-size: 0.72rem;
      color: #b7d0b7;
    }
    h4 {
      font-family: var(--font-mono);
      font-size: 0.68rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: rgba(226, 232, 240, 0.42);
      margin-bottom: 0.85rem;
      font-weight: 600;
    }
    .links {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.55rem 1rem;
    }
    .links a,
    .socials a {
      font-size: 0.88rem;
      color: rgba(226, 232, 240, 0.55);
      transition: color 0.2s ease;
    }
    .links a:hover,
    .socials a:hover {
      color: #5eead4;
    }
    .socials {
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
    }
    .socials a {
      display: inline-flex;
      align-items: center;
      gap: 0.55rem;
    }
    .credit {
      display: inline-flex;
      align-items: center;
      gap: 0.3rem;
      transition: color 0.2s var(--ease-out);
    }
    .credit strong { color: #5eead4; font-weight: 600; }
    .credit:hover { color: #e2e8f0; }
    .copyright {
      padding-top: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      font-family: var(--font-mono);
      font-size: 0.7rem;
      color: rgba(226, 232, 240, 0.35);
    }
    @media (min-width: 640px) {
      .copyright {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
  `]
})
export class FooterComponent {
  public readonly i18n = inject(I18nService);
  public readonly data = inject(PortfolioDataService);
  public readonly t = this.i18n.t;
  public readonly currentYear = new Date().getFullYear();
}
