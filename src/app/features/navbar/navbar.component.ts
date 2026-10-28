import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/services/i18n.service';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { CvService } from '../../core/services/cv.service';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { LogoComponent } from '../../shared/components/logo/logo.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, IconComponent, LogoComponent],
  template: `
    <header
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [class.nav-scrolled]="isScrolled()"
      [class.nav-transparent]="!isScrolled()">
      <div class="container">
        <div class="flex items-center justify-between h-[76px]">

          <a href="#" class="brand group flex items-center gap-3">
            <app-logo [size]="40"></app-logo>
            <span class="brand-text">
              <span class="brand-name">Cesar Bermudez</span>
              <span class="brand-role">Backend Developer</span>
            </span>
          </a>

          <nav class="hidden lg:flex items-center gap-1">
            <a href="#about" class="nav-link">{{ t().nav.about }}</a>
            <a href="#experience" class="nav-link">{{ t().nav.experience }}</a>
            <a href="#education" class="nav-link">{{ t().nav.education }}</a>
            <a href="#skills" class="nav-link">{{ t().nav.skills }}</a>
            <a href="#projects" class="nav-link">{{ t().nav.projects }}</a>
            <a href="#contact" class="nav-link">{{ t().nav.contact }}</a>
          </nav>

          <div class="hidden sm:flex items-center gap-2.5">
            <button
              type="button"
              (click)="i18n.toggleLanguage()"
              class="lang-btn"
              [attr.aria-label]="'Switch language to ' + (currentLang() === 'en' ? 'Spanish' : 'English')">
              <app-icon name="globe" [size]="15" color="#5EEAD4"></app-icon>
              <span>{{ currentLang() === 'en' ? 'ES' : 'EN' }}</span>
            </button>

            <a
              [href]="data.personalInfo.github"
              target="_blank"
              rel="noopener noreferrer"
              class="icon-btn"
              aria-label="GitHub Profile">
              <app-icon name="github" [size]="17"></app-icon>
            </a>

            <a
              [href]="data.personalInfo.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="icon-btn"
              aria-label="LinkedIn Profile">
              <app-icon name="linkedin" [size]="17"></app-icon>
            </a>

            <button
              type="button"
              (click)="cv.download()"
              [disabled]="cv.generating()"
              class="btn btn-primary text-sm py-2 px-3.5">
              <app-icon name="download" [size]="15"></app-icon>
              <span>{{ cv.generating() ? t().nav.generating : t().nav.resume }}</span>
            </button>
          </div>

          <div class="flex items-center gap-2 md:hidden">
            <button
              type="button"
              (click)="i18n.toggleLanguage()"
              class="lang-btn compact">
              <app-icon name="globe" [size]="14" color="#5EEAD4"></app-icon>
              <span>{{ currentLang().toUpperCase() }}</span>
            </button>

            <button
              type="button"
              (click)="isMobileMenuOpen.set(!isMobileMenuOpen())"
              class="icon-btn"
              aria-label="Toggle navigation menu">
              <app-icon [name]="isMobileMenuOpen() ? 'x' : 'menu'" [size]="20"></app-icon>
            </button>
          </div>
        </div>
      </div>

      @if (isMobileMenuOpen()) {
        <div class="mobile-panel md:hidden">
          <nav class="flex flex-col gap-1">
            <a (click)="isMobileMenuOpen.set(false)" href="#about" class="mobile-nav-link">{{ t().nav.about }}</a>
            <a (click)="isMobileMenuOpen.set(false)" href="#experience" class="mobile-nav-link">{{ t().nav.experience }}</a>
            <a (click)="isMobileMenuOpen.set(false)" href="#skills" class="mobile-nav-link">{{ t().nav.skills }}</a>
            <a (click)="isMobileMenuOpen.set(false)" href="#projects" class="mobile-nav-link">{{ t().nav.projects }}</a>
            <a (click)="isMobileMenuOpen.set(false)" href="#contact" class="mobile-nav-link">{{ t().nav.contact }}</a>
          </nav>

          <div class="mobile-footer">
            <div class="flex items-center gap-2">
              <a [href]="data.personalInfo.github" target="_blank" rel="noopener" class="icon-btn">
                <app-icon name="github" [size]="18"></app-icon>
              </a>
              <a [href]="data.personalInfo.linkedin" target="_blank" rel="noopener" class="icon-btn">
                <app-icon name="linkedin" [size]="18"></app-icon>
              </a>
            </div>
            <button
              type="button"
              (click)="cv.download(); isMobileMenuOpen.set(false)"
              [disabled]="cv.generating()"
              class="btn btn-primary text-sm py-2 px-4">
              <app-icon name="download" [size]="15"></app-icon>
              {{ cv.generating() ? t().nav.generating : t().nav.resume }}
            </button>
          </div>
        </div>
      }
    </header>
  `,
  styles: [`
    .nav-transparent {
      background: rgba(15, 23, 42, 0.35);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid transparent;
    }
    .nav-scrolled {
      background: rgba(15, 23, 42, 0.92);
      backdrop-filter: blur(18px);
      border-bottom: 1px solid rgba(226, 232, 240, 0.1);
      box-shadow: 0 8px 28px rgba(2, 6, 23, 0.35);
    }
    .brand-text {
      display: flex;
      flex-direction: column;
      line-height: 1.15;
    }
    .brand-name {
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 1rem;
      color: #e2e8f0;
    }
    .brand-role {
      font-family: var(--font-mono);
      font-size: 0.65rem;
      color: rgba(226, 232, 240, 0.45);
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .nav-link {
      padding: 0.45rem 0.7rem;
      font-size: 0.84rem;
      font-weight: 500;
      color: rgba(226, 232, 240, 0.58);
      border-radius: 0.25rem;
      transition: color 0.2s ease, background 0.2s ease;
    }
    .nav-link:hover {
      color: #e2e8f0;
      background: rgba(226, 232, 240, 0.06);
    }
    .lang-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.4rem 0.7rem;
      border-radius: 0.25rem;
      border: 1px solid rgba(226, 232, 240, 0.12);
      background: rgba(30, 41, 59, 0.7);
      color: #e2e8f0;
      font-family: var(--font-mono);
      font-size: 0.75rem;
      font-weight: 600;
      transition: border-color 0.2s ease;
    }
    .lang-btn:hover {
      border-color: rgba(94, 234, 212, 0.5);
    }
    .lang-btn.compact {
      padding: 0.35rem 0.55rem;
    }
    .icon-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 2.35rem;
      height: 2.35rem;
      border-radius: 0.25rem;
      border: 1px solid rgba(226, 232, 240, 0.12);
      background: rgba(30, 41, 59, 0.55);
      color: rgba(226, 232, 240, 0.75);
      transition: color 0.2s ease, border-color 0.2s ease;
    }
    .icon-btn:hover {
      color: #e2e8f0;
      border-color: rgba(94, 234, 212, 0.45);
    }
    .mobile-panel {
      background: rgba(15, 23, 42, 0.97);
      border-bottom: 1px solid rgba(226, 232, 240, 0.1);
      padding: 1rem 1.5rem 1.5rem;
    }
    .mobile-nav-link {
      padding: 0.85rem 0;
      font-size: 1.05rem;
      font-weight: 560;
      color: #e2e8f0;
      border-bottom: 1px solid rgba(226, 232, 240, 0.08);
    }
    .mobile-nav-link:hover {
      color: #5eead4;
    }
    .mobile-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 1.1rem;
      margin-top: 0.75rem;
      border-top: 1px solid rgba(226, 232, 240, 0.1);
    }
  `]
})
export class NavbarComponent {
  public readonly i18n = inject(I18nService);
  public readonly data = inject(PortfolioDataService);
  public readonly cv = inject(CvService);

  public readonly t = this.i18n.t;
  public readonly currentLang = this.i18n.currentLang;
  public readonly isMobileMenuOpen = signal<boolean>(false);
  public readonly isScrolled = signal<boolean>(false);

  @HostListener('window:scroll')
  public onWindowScroll(): void {
    if (typeof window !== 'undefined') {
      this.isScrolled.set(window.scrollY > 30);
    }
  }
}
