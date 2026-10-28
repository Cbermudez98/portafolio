import { Component, inject, signal, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { I18nService } from '../../core/services/i18n.service';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="contact" class="section">
      <div class="container">
        <div class="section-header center">
          <div class="section-eyebrow">
            <app-icon name="mail" [size]="14"></app-icon>
            <span>{{ t().contact.eyebrow }}</span>
          </div>
          <h2 class="section-title">{{ t().contact.title }}</h2>
          <p class="section-subtitle">{{ t().contact.subtitle }}</p>
        </div>

        <div class="contact-panel reveal">
          <!-- primary: email -->
          <div class="email-row">
            <span class="email-label">{{ t().contact.emailLabel }}</span>
            <a class="email" [href]="'mailto:' + data.personalInfo.email">{{ data.personalInfo.email }}</a>
            <div class="email-actions">
              <button type="button" class="btn btn-primary" (click)="copyEmailToClipboard()">
                <app-icon [name]="emailCopied() ? 'check' : 'copy'" [size]="15"></app-icon>
                <span>{{ emailCopied() ? t().contact.emailCopied : t().contact.copyEmail }}</span>
              </button>
              <a class="btn btn-secondary" [href]="'mailto:' + data.personalInfo.email">
                <app-icon name="mail" [size]="15"></app-icon>
                <span>{{ t().contact.writeEmail }}</span>
              </a>
            </div>
          </div>

          <!-- socials -->
          <div class="dim-siblings links">
            <a class="link" [href]="data.personalInfo.linkedin" target="_blank" rel="noopener noreferrer">
              <span class="link-icon"><app-icon name="linkedin" [size]="18"></app-icon></span>
              <span class="link-text">
                <span class="link-label">LinkedIn</span>
                <span class="link-value">/in/cesar-bermudez-sierra</span>
              </span>
              <app-icon class="link-arrow" name="external-link" [size]="14"></app-icon>
            </a>
            <a class="link" [href]="data.personalInfo.github" target="_blank" rel="noopener noreferrer">
              <span class="link-icon"><app-icon name="github" [size]="18"></app-icon></span>
              <span class="link-text">
                <span class="link-label">GitHub</span>
                <span class="link-value">&#64;{{ data.personalInfo.handle }}</span>
              </span>
              <app-icon class="link-arrow" name="external-link" [size]="14"></app-icon>
            </a>
          </div>

          <!-- location & relocation -->
          <div class="meta">
            <div class="meta-item">
              <app-icon name="globe" [size]="15" color="#94a3b8"></app-icon>
              <span class="meta-label">{{ t().contact.locationLabel }}</span>
              <span class="meta-value">{{ t().contact.locationValue }}</span>
            </div>
            <span class="meta-divider" aria-hidden="true"></span>
            <div class="meta-item">
              <app-icon name="arrow-right" [size]="15" color="#5EEAD4"></app-icon>
              <span class="meta-label">{{ t().contact.relocationLabel }}</span>
              <span class="regions">
                @for (region of t().contact.relocationRegions; track region) {
                  <span class="region">{{ region }}</span>
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-panel {
      max-width: 860px;
      margin: 0 auto;
      padding: clamp(1.5rem, 4vw, 2.5rem);
      border-radius: 0.6rem;
      border: 1px solid rgba(94, 234, 212, 0.25);
      background:
        radial-gradient(ellipse 60% 80% at 100% 0%, rgba(94, 234, 212, 0.14), transparent 60%),
        radial-gradient(ellipse 50% 70% at 0% 100%, rgba(19, 78, 74, 0.3), transparent 60%),
        rgba(17, 26, 46, 0.7);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
    }

    .email-row {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 0.6rem;
    }
    .email-label, .meta-label, .link-label {
      font-family: var(--font-mono);
      font-size: 0.66rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: rgba(226, 232, 240, 0.45);
    }
    .email {
      font-family: var(--font-display);
      font-size: clamp(1.35rem, 3.6vw, 2.1rem);
      font-weight: 600;
      letter-spacing: -0.02em;
      color: #e2e8f0;
      overflow-wrap: anywhere;
      background-image: linear-gradient(#5eead4, #5eead4);
      background-size: 0% 2px;
      background-position: 0 100%;
      background-repeat: no-repeat;
      transition: background-size 0.4s var(--ease-out), color 0.2s;
    }
    .email:hover { color: #5eead4; background-size: 100% 2px; }
    .email-actions {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 0.6rem;
      margin-top: 0.6rem;
    }

    .links {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
      gap: 0.75rem;
      margin-top: 2rem;
    }
    .link {
      display: flex;
      align-items: center;
      gap: 0.85rem;
      padding: 0.85rem 1rem;
      border-radius: 0.45rem;
      background: rgba(15, 23, 42, 0.55);
      border: 1px solid rgba(226, 232, 240, 0.1);
      transition: border-color 0.25s var(--ease-out), transform 0.25s var(--ease-out), background 0.25s;
    }
    .link:hover {
      border-color: rgba(94, 234, 212, 0.5);
      background: rgba(15, 23, 42, 0.8);
      transform: translateY(-2px);
    }
    .link-icon {
      width: 2.4rem;
      height: 2.4rem;
      flex-shrink: 0;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background: rgba(94, 234, 212, 0.15);
      color: #5eead4;
      transition: background 0.25s, color 0.25s;
    }
    .link:hover .link-icon { background: #5eead4; color: #0f172a; }
    .link-text { display: flex; flex-direction: column; flex: 1; min-width: 0; }
    .link-value {
      font-size: 0.92rem;
      font-weight: 600;
      color: #e2e8f0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .link-arrow { color: rgba(226, 232, 240, 0.4); transition: transform 0.25s var(--ease-out), color 0.25s; }
    .link:hover .link-arrow { color: #5eead4; transform: translate(2px, -2px); }

    .meta {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 0.85rem 1.5rem;
      margin-top: 1.75rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(226, 232, 240, 0.08);
    }
    .meta-item {
      display: inline-flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
    }
    .meta-value { font-size: 0.88rem; color: rgba(226, 232, 240, 0.8); }
    .meta-divider { width: 1px; height: 1.25rem; background: rgba(226, 232, 240, 0.12); }
    .regions { display: inline-flex; gap: 0.35rem; }
    .region {
      font-size: 0.78rem;
      font-weight: 600;
      padding: 0.18rem 0.6rem;
      border-radius: 999px;
      background: rgba(19, 78, 74, 0.55);
      border: 1px solid rgba(19, 78, 74, 0.95);
      color: #e2e8f0;
    }
    @media (max-width: 640px) {
      .meta { flex-direction: column; }
      .meta-divider { display: none; }
    }
  `]
})
export class ContactComponent {
  public readonly i18n = inject(I18nService);
  public readonly data = inject(PortfolioDataService);
  private readonly platformId = inject(PLATFORM_ID);

  public readonly t = this.i18n.t;
  public readonly emailCopied = signal<boolean>(false);

  public copyEmailToClipboard(): void {
    if (isPlatformBrowser(this.platformId)) {
      navigator.clipboard.writeText(this.data.personalInfo.email).then(() => {
        this.emailCopied.set(true);
        setTimeout(() => this.emailCopied.set(false), 2500);
      });
    }
  }
}
