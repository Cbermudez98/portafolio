import { Component, inject, signal, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/services/i18n.service';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <header 
      class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      [class.nav-scrolled]="isScrolled()"
      [class.nav-transparent]="!isScrolled()">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- Brand Logo -->
          <a href="#" class="flex items-center gap-3 group focus:outline-none">
            <div class="relative flex items-center justify-center w-11 h-11 rounded-xl bg-slate-900 border border-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-all duration-300">
              <span class="font-mono text-lg font-bold text-cyan-400 tracking-wider">&lt;CB/&gt;</span>
              <div class="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></div>
              <div class="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
            </div>
            <div class="flex flex-col">
              <span class="font-bold text-white text-base tracking-tight group-hover:text-cyan-300 transition-colors">
                Cesar Bermudez
              </span>
              <span class="font-mono text-xs text-slate-400 flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                Senior Backend Dev
              </span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center gap-1 lg:gap-2 bg-slate-900/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-800/80 shadow-inner">
            <a href="#about" class="nav-link">{{ t().nav.about }}</a>
            <a href="#experience" class="nav-link">{{ t().nav.experience }}</a>
            <a href="#skills" class="nav-link">{{ t().nav.skills }}</a>
            <a href="#architecture" class="nav-link flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              {{ t().nav.architecture }}
            </a>
            <a href="#projects" class="nav-link">{{ t().nav.projects }}</a>
            <a href="#contact" class="nav-link">{{ t().nav.contact }}</a>
          </nav>

          <!-- Action Controls: Language Toggle & Socials -->
          <div class="hidden sm:flex items-center gap-3">
            
            <!-- Language Switcher Pill -->
            <button 
              type="button"
              (click)="i18n.toggleLanguage()"
              class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 text-sm font-mono text-slate-200 transition-all hover:border-cyan-500/40"
              [attr.aria-label]="'Switch language to ' + (currentLang() === 'en' ? 'Spanish' : 'English')">
              <app-icon name="globe" [size]="16" color="#38bdf8"></app-icon>
              <span class="font-semibold">{{ currentLang() === 'en' ? 'ES' : 'EN' }}</span>
              <span class="text-xs text-slate-400 px-1 py-0.5 rounded bg-slate-900/80 border border-slate-700">
                {{ currentLang().toUpperCase() }}
              </span>
            </button>

            <!-- GitHub Link -->
            <a 
              [href]="data.personalInfo.github" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700/80 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-all"
              aria-label="GitHub Profile">
              <app-icon name="github" [size]="18"></app-icon>
            </a>

            <!-- LinkedIn Link -->
            <a 
              [href]="data.personalInfo.linkedin" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800/60 hover:bg-slate-700/80 border border-slate-700/80 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              aria-label="LinkedIn Profile">
              <app-icon name="linkedin" [size]="18"></app-icon>
            </a>

            <!-- Contact CTA -->
            <a 
              href="#contact" 
              class="btn btn-primary text-xs py-2 px-4 shadow-[0_0_15px_rgba(14,165,233,0.3)]">
              <span>{{ t().hero.ctaContact }}</span>
              <app-icon name="arrow-right" [size]="14"></app-icon>
            </a>
          </div>

          <!-- Mobile Menu Trigger -->
          <div class="flex items-center gap-2 md:hidden">
            <!-- Language toggle for mobile -->
            <button 
              type="button"
              (click)="i18n.toggleLanguage()"
              class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-400">
              <app-icon name="globe" [size]="14"></app-icon>
              <span>{{ currentLang().toUpperCase() }}</span>
            </button>

            <button 
              type="button"
              (click)="isMobileMenuOpen.set(!isMobileMenuOpen())"
              class="p-2.5 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu">
              <app-icon [name]="isMobileMenuOpen() ? 'x' : 'menu'" [size]="22"></app-icon>
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      @if (isMobileMenuOpen()) {
        <div class="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-6 py-6 transition-all duration-300">
          <nav class="flex flex-col gap-3">
            <a (click)="isMobileMenuOpen.set(false)" href="#about" class="mobile-nav-link">{{ t().nav.about }}</a>
            <a (click)="isMobileMenuOpen.set(false)" href="#experience" class="mobile-nav-link">{{ t().nav.experience }}</a>
            <a (click)="isMobileMenuOpen.set(false)" href="#skills" class="mobile-nav-link">{{ t().nav.skills }}</a>
            <a (click)="isMobileMenuOpen.set(false)" href="#architecture" class="mobile-nav-link">{{ t().nav.architecture }}</a>
            <a (click)="isMobileMenuOpen.set(false)" href="#projects" class="mobile-nav-link">{{ t().nav.projects }}</a>
            <a (click)="isMobileMenuOpen.set(false)" href="#contact" class="mobile-nav-link">{{ t().nav.contact }}</a>
          </nav>

          <div class="pt-5 mt-4 border-t border-slate-800 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <a [href]="data.personalInfo.github" target="_blank" rel="noopener" class="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                <app-icon name="github" [size]="20"></app-icon>
              </a>
              <a [href]="data.personalInfo.linkedin" target="_blank" rel="noopener" class="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                <app-icon name="linkedin" [size]="20"></app-icon>
              </a>
            </div>

            <a (click)="isMobileMenuOpen.set(false)" href="#contact" class="btn btn-primary text-xs py-2 px-4">
              {{ t().hero.ctaContact }}
            </a>
          </div>
        </div>
      }
    </header>
  `,
  styles: [`
    .nav-transparent {
      background: rgba(7, 9, 14, 0.4);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.03);
    }
    .nav-scrolled {
      background: rgba(7, 9, 14, 0.92);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(56, 189, 248, 0.15);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
    }
    .nav-link {
      padding: 0.5rem 0.9rem;
      font-size: 0.875rem;
      font-weight: 500;
      color: #94a3b8;
      border-radius: 9999px;
      transition: all 0.2s ease;
    }
    .nav-link:hover {
      color: #ffffff;
      background: rgba(255, 255, 255, 0.06);
    }
    .mobile-nav-link {
      padding: 0.75rem 0;
      font-size: 1.1rem;
      font-weight: 600;
      color: #cbd5e1;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    }
    .mobile-nav-link:hover {
      color: #38bdf8;
    }
    .flex { display: flex; }
    .hidden { display: none; }
    .items-center { align-items: center; }
    .justify-center { justify-content: center; }
    .justify-between { justify-content: space-between; }
    .shrink-0 { flex-shrink: 0; }
    .relative { position: relative; }
    .absolute { position: absolute; }
    .fixed { position: fixed; }
    .w-full { width: 100%; }
    .gap-1 { gap: 0.25rem; }
    .gap-2 { gap: 0.5rem; }
    .gap-3 { gap: 0.75rem; }
    .px-4 { padding-left: 1rem; padding-right: 1rem; }
    .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
    @media (min-width: 768px) {
      .md\\:flex { display: flex; }
      .md\\:hidden { display: none; }
    }
    @media (min-width: 640px) {
      .sm\\:flex { display: flex; }
    }
  `]
})
export class NavbarComponent {
  public readonly i18n = inject(I18nService);
  public readonly data = inject(PortfolioDataService);

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
