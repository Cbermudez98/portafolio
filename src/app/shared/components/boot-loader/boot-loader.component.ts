import { Component, DestroyRef, HostListener, PLATFORM_ID, computed, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { I18nService } from '../../../core/services/i18n.service';
import { PortfolioDataService } from '../../../core/services/portfolio-data.service';
import { LogoComponent } from '../logo/logo.component';

/** Set once per browser session so the intro only plays on the first visit */
export const BOOT_SESSION_KEY = 'cb_booted';
/** Added by the inline script in index.html before Angular boots */
const BOOTING_CLASS = 'booting';

const DURATION_MS = 2600;
const HOLD_MS = 350;
const EXIT_MS = 750;

type Phase = 'loading' | 'leaving' | 'done';

/**
 * First-visit intro styled as a backend boot sequence: the logo draws itself,
 * the name types in and a small terminal "deploys" the portfolio using its real
 * numbers before the screen lifts like a curtain.
 */
@Component({
  selector: 'app-boot-loader',
  standalone: true,
  imports: [LogoComponent],
  template: `
    @if (phase() !== 'done') {
      <div class="boot" [class.leaving]="phase() === 'leaving'" role="status" [attr.aria-label]="t().boot.ready">
        <div class="grid" aria-hidden="true"></div>

        <div class="center">
          <div class="logo-wrap">
            <span class="halo" aria-hidden="true"></span>
            <app-logo [size]="96"></app-logo>
          </div>

          <h1 class="name" aria-hidden="true">
            @for (ch of nameChars; track $index) {
              <span class="ch" [style.--i]="$index">{{ ch === ' ' ? ' ' : ch }}</span>
            }
          </h1>
          <p class="role">{{ t().hero.tagline }}</p>

          <div class="term" aria-hidden="true">
            @for (line of lines(); track $index; let i = $index) {
              @if (i < visibleLines()) {
                <div class="line">
                  <span class="prompt">$</span>
                  <span class="cmd">{{ line.cmd }}</span>
                  <span class="detail">{{ line.detail }}</span>
                  <span class="status" [class.done]="i < doneLines()">
                    {{ i < doneLines() ? 'ok' : '' }}
                    @if (i >= doneLines()) { <span class="spinner"></span> }
                  </span>
                </div>
              }
            }
          </div>

          <div class="progress" aria-hidden="true">
            <div class="bar"><span [style.transform]="'scaleX(' + progress() / 100 + ')'"></span></div>
            <span class="pct">{{ progress() }}%</span>
          </div>
        </div>

        <button type="button" class="skip" (click)="finish()">
          {{ t().boot.skip }} <kbd>Esc</kbd>
        </button>
      </div>
    }
  `,
  styles: [`
    .boot {
      position: fixed;
      inset: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.5rem;
      background:
        radial-gradient(600px circle at 50% 42%, rgba(29, 78, 216, 0.22), transparent 70%),
        #0f172a;
      transition: transform 0.75s cubic-bezier(0.76, 0, 0.24, 1);
    }
    .boot.leaving { transform: translateY(-100%); }
    .boot.leaving .center {
      opacity: 0;
      transform: translateY(-24px) scale(0.97);
    }

    /* faint blueprint grid that fades out toward the edges */
    .grid {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(148, 163, 184, 0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(148, 163, 184, 0.06) 1px, transparent 1px);
      background-size: 44px 44px;
      mask-image: radial-gradient(circle at 50% 45%, #000 0%, transparent 65%);
      -webkit-mask-image: radial-gradient(circle at 50% 45%, #000 0%, transparent 65%);
      animation: grid-in 1.2s ease both;
    }

    .center {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: min(100%, 480px);
      transition: opacity 0.35s ease, transform 0.45s ease;
    }

    .logo-wrap { position: relative; margin-bottom: 1.5rem; }
    .halo {
      position: absolute;
      inset: -18px;
      border-radius: 32px;
      border: 1px solid rgba(94, 234, 212, 0.25);
      animation: halo 2.2s ease-out infinite;
    }

    .name {
      font-size: clamp(1.4rem, 4.5vw, 1.9rem);
      font-weight: 800;
      letter-spacing: -0.02em;
      color: #e2e8f0;
      margin-bottom: 0.35rem;
    }
    .ch {
      display: inline-block;
      opacity: 0;
      transform: translateY(10px);
      animation: ch-in 0.45s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      animation-delay: calc(0.45s + var(--i) * 35ms);
    }
    .role {
      font-family: var(--font-mono);
      font-size: 0.68rem;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #5eead4;
      margin-bottom: 1.6rem;
      opacity: 0;
      animation: fade 0.6s ease 1.1s forwards;
    }

    .term {
      width: 100%;
      min-height: 6.4rem;
      padding: 0.75rem 0.9rem;
      border-radius: 0.5rem;
      background: rgba(2, 6, 23, 0.55);
      border: 1px solid rgba(148, 163, 184, 0.12);
      font-family: var(--font-mono);
      font-size: 0.72rem;
      text-align: left;
    }
    .line {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      line-height: 1.6;
      animation: line-in 0.3s ease both;
    }
    .prompt { color: #3b82f6; }
    .cmd { color: #5eead4; font-weight: 600; min-width: 4.2rem; }
    .detail { color: #94a3b8; flex: 1; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .status {
      display: inline-flex;
      align-items: center;
      justify-content: flex-end;
      min-width: 1.4rem;
      color: #64748b;
    }
    .status.done { color: #5eead4; font-weight: 700; }
    .spinner {
      width: 0.65rem;
      height: 0.65rem;
      border-radius: 50%;
      border: 1.5px solid rgba(94, 234, 212, 0.25);
      border-top-color: #5eead4;
      animation: spin 0.7s linear infinite;
    }

    .progress {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 0.75rem;
      margin-top: 1rem;
    }
    .bar {
      flex: 1;
      height: 3px;
      border-radius: 999px;
      background: rgba(148, 163, 184, 0.15);
      overflow: hidden;
    }
    .bar span {
      display: block;
      height: 100%;
      transform-origin: left;
      background: linear-gradient(90deg, #5eead4, #3b82f6);
      box-shadow: 0 0 12px rgba(94, 234, 212, 0.6);
    }
    .pct {
      font-family: var(--font-mono);
      font-size: 0.72rem;
      color: #e2e8f0;
      min-width: 2.6rem;
      text-align: right;
    }

    .skip {
      position: absolute;
      right: max(1.25rem, env(safe-area-inset-right));
      bottom: max(1.25rem, env(safe-area-inset-bottom));
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      padding: 0.4rem 0.7rem;
      border-radius: 999px;
      border: 1px solid rgba(148, 163, 184, 0.2);
      color: #94a3b8;
      font-size: 0.75rem;
      transition: color 0.2s, border-color 0.2s;
    }
    .skip:hover { color: #5eead4; border-color: rgba(94, 234, 212, 0.5); }
    kbd {
      font-family: var(--font-mono);
      font-size: 0.62rem;
      padding: 0.05rem 0.3rem;
      border-radius: 0.25rem;
      border: 1px solid rgba(148, 163, 184, 0.25);
    }

    @keyframes ch-in { to { opacity: 1; transform: none; } }
    @keyframes fade { to { opacity: 1; } }
    @keyframes grid-in { from { opacity: 0; } }
    @keyframes line-in { from { opacity: 0; transform: translateX(-6px); } }
    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes halo {
      0% { opacity: 0.8; transform: scale(0.92); }
      100% { opacity: 0; transform: scale(1.25); }
    }
  `]
})
export class BootLoaderComponent {
  private readonly i18n = inject(I18nService);
  private readonly data = inject(PortfolioDataService);
  private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));

  public readonly t = this.i18n.t;
  public readonly nameChars = [...this.data.personalInfo.name];
  public readonly phase = signal<Phase>('done');
  public readonly progress = signal(0);

  /** Boot log built from the live portfolio data */
  public readonly lines = computed(() => {
    const t = this.t();
    const fill = (text: string) =>
      text
        .replace('{roles}', String(t.experience.items.length))
        .replace('{certs}', String(t.education.certifications.length))
        .replace('{years}', this.data.personalInfo.yearsOfExperience);
    return t.boot.lines.map(line => ({ cmd: line.cmd, detail: fill(line.detail) }));
  });

  /** Lines appear and resolve as the progress bar advances */
  public readonly visibleLines = computed(() =>
    Math.min(this.lines().length, Math.floor(this.progress() / (100 / this.lines().length)) + 1)
  );
  public readonly doneLines = computed(() =>
    this.progress() >= 100 ? this.lines().length : this.visibleLines() - 1
  );

  private frame = 0;
  private timers: ReturnType<typeof setTimeout>[] = [];

  constructor() {
    if (!this.isBrowser || !document.documentElement.classList.contains(BOOTING_CLASS)) return;

    this.phase.set('loading');
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / DURATION_MS, 1);
      // ease-in-out so it feels like work is being done, not a linear timer
      const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
      this.progress.set(Math.round(eased * 100));
      if (p < 1) {
        this.frame = requestAnimationFrame(tick);
      } else {
        this.timers.push(setTimeout(() => this.finish(), HOLD_MS));
      }
    };
    this.frame = requestAnimationFrame(tick);

    inject(DestroyRef).onDestroy(() => {
      cancelAnimationFrame(this.frame);
      this.timers.forEach(clearTimeout);
    });
  }

  @HostListener('document:keydown.escape')
  public finish(): void {
    if (this.phase() !== 'loading') return;
    cancelAnimationFrame(this.frame);
    this.progress.set(100);
    this.phase.set('leaving');

    try {
      sessionStorage.setItem(BOOT_SESSION_KEY, '1');
    } catch {
      // storage unavailable (private mode): the intro simply plays again next time
    }
    // Let the page's own entrance animations run as the curtain lifts
    document.documentElement.classList.remove(BOOTING_CLASS);
    this.timers.push(setTimeout(() => this.phase.set('done'), EXIT_MS));
  }
}
