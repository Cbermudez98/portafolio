import { Injectable, computed, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Language } from '../models/portfolio.model';
import { translations, TranslationsType } from '../i18n/translations';

@Injectable({
  providedIn: 'root'
})
export class I18nService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly storageKey = 'portfolio_lang_preference';

  // State
  private readonly langSignal = signal<Language>(this.detectInitialLanguage());

  // Public readonly signal
  public readonly currentLang = this.langSignal.asReadonly();

  // Reactive computed translation object
  public readonly t = computed<TranslationsType>(() => {
    return translations[this.langSignal()];
  });

  constructor() {
    this.updateHtmlLang(this.langSignal());
  }

  /**
   * Set active language explicitly
   */
  public setLanguage(lang: Language): void {
    if (this.langSignal() === lang) return;
    this.langSignal.set(lang);

    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.setItem(this.storageKey, lang);
      } catch (e) {
        console.warn('Could not persist language to localStorage', e);
      }
    }
    this.updateHtmlLang(lang);
  }

  /**
   * Toggle between EN and ES
   */
  public toggleLanguage(): void {
    const nextLang: Language = this.langSignal() === 'en' ? 'es' : 'en';
    this.setLanguage(nextLang);
  }

  /**
   * Browser language detection with English fallback
   */
  private detectInitialLanguage(): Language {
    if (!isPlatformBrowser(this.platformId)) {
      return 'en';
    }

    try {
      const stored = localStorage.getItem(this.storageKey) as Language | null;
      if (stored === 'en' || stored === 'es') {
        return stored;
      }

      // Detect browser language
      const navLangs = navigator.languages || [navigator.language];
      for (const lang of navLangs) {
        if (lang) {
          const normalized = lang.toLowerCase();
          if (normalized.startsWith('es')) {
            return 'es';
          }
          if (normalized.startsWith('en')) {
            return 'en';
          }
        }
      }
    } catch (e) {
      console.warn('Error reading language from browser/storage', e);
    }

    // Default fallback
    return 'en';
  }

  private updateHtmlLang(lang: Language): void {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.lang = lang;
    }
  }
}
