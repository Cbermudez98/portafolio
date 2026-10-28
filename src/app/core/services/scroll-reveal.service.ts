import { Injectable } from '@angular/core';

const TARGETS = '.reveal, .reveal-line, .reveal-stagger, .section-header';

/**
 * Lightweight scroll-reveal: elements matching TARGETS (plus standalone `main .surface`
 * cards) get `.is-visible` when they enter the viewport. Hidden states only apply once
 * `html.reveal-ready` is set, so content stays visible if this never runs.
 */
@Injectable({ providedIn: 'root' })
export class ScrollRevealService {
  private io?: IntersectionObserver;
  private mo?: MutationObserver;

  public init(): void {
    if (this.io || typeof IntersectionObserver === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    this.io = new IntersectionObserver(entries => this.onIntersect(entries), {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.08
    });

    this.scan(document.body);
    document.documentElement.classList.add('reveal-ready');

    this.mo = new MutationObserver(mutations => {
      for (const m of mutations) {
        m.addedNodes.forEach(node => node instanceof HTMLElement && this.scan(node));
      }
    });
    this.mo.observe(document.body, { childList: true, subtree: true });
  }

  public destroy(): void {
    this.io?.disconnect();
    this.mo?.disconnect();
    this.io = this.mo = undefined;
  }

  private scan(root: HTMLElement): void {
    const candidates = [
      ...(root.matches(TARGETS) ? [root] : []),
      ...Array.from(root.querySelectorAll<HTMLElement>(TARGETS)),
      ...Array.from(root.querySelectorAll<HTMLElement>('main .surface'))
    ];
    for (const el of candidates) {
      if (el.dataset['revealBound'] || el.closest('#hero')) continue;
      if (el.classList.contains('surface') && !el.classList.contains('reveal')) {
        // Skip cards already animated by a revealing ancestor
        if (el.parentElement?.closest('.reveal, .reveal-stagger, .reveal-line')) continue;
        el.classList.add('reveal');
      }
      el.dataset['revealBound'] = '1';
      this.io!.observe(el);
    }
  }

  private onIntersect(entries: IntersectionObserverEntry[]): void {
    let batchIndex = 0;
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const el = entry.target as HTMLElement;
      if (el.classList.contains('reveal')) {
        el.style.setProperty('--reveal-delay', `${Math.min(batchIndex++ * 80, 400)}ms`);
        // Drop the entrance delay afterwards so hover transforms respond instantly
        setTimeout(() => el.style.removeProperty('--reveal-delay'), 1300);
      }
      el.classList.add('is-visible');
      this.io!.unobserve(el);
    }
  }
}
