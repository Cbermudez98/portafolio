import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { I18nService } from './core/services/i18n.service';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the developer name', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Cesar Bermudez Sierra');
  });

  it('should support language switching', () => {
    const i18n = TestBed.inject(I18nService);
    const initialLang = i18n.currentLang();
    expect(['en', 'es']).toContain(initialLang);

    i18n.setLanguage('es');
    expect(i18n.currentLang()).toBe('es');
    expect(i18n.t().nav.about).toBe('Sobre Mí');

    i18n.setLanguage('en');
    expect(i18n.currentLang()).toBe('en');
    expect(i18n.t().nav.about).toBe('About');
  });
});
