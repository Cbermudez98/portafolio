import { Component, inject, signal, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { I18nService } from '../../core/services/i18n.service';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section class="hero relative overflow-hidden">
      <div class="hero-glow hero-glow-a animate-drift"></div>
      <div class="hero-glow hero-glow-b"></div>

      <div class="container relative z-10">
        <div class="hero-grid">

          <div class="hero-copy animate-fade-up">
            <div class="hero-meta">
              <span class="availability">
                <span class="status-dot"></span>
                {{ t().hero.availableBadge }}
              </span>
              <span class="location">
                <app-icon name="globe" [size]="14" color="#94a3b8"></app-icon>
                {{ t().hero.location }}
              </span>
              <span class="relocation">
                <app-icon name="globe" [size]="14" color="#5EEAD4"></app-icon>
                {{ t().hero.relocation }}
              </span>
              <span class="studying">
                <app-icon name="layers" [size]="14" color="#5EEAD4"></app-icon>
                {{ t().hero.studyingBadge }}
              </span>
            </div>

            <p class="hero-role">{{ t().hero.role }}</p>

            <h1 class="hero-name">Cesar Bermudez Sierra</h1>

            <p class="hero-tagline">{{ t().hero.tagline }}</p>

            <p class="hero-desc">{{ t().hero.description }}</p>

            <div class="hero-ctas animate-fade-up-delay">
              <a href="#experience" class="btn btn-primary">
                <app-icon name="activity" [size]="17"></app-icon>
                <span>{{ t().hero.ctaProjects }}</span>
              </a>
              <a href="#projects" class="btn btn-ghost">
                <app-icon name="github" [size]="17"></app-icon>
                <span>{{ t().hero.ctaPlayground }}</span>
              </a>
              <a href="#contact" class="btn btn-secondary">
                <app-icon name="mail" [size]="17"></app-icon>
                <span>{{ t().hero.ctaContact }}</span>
              </a>
            </div>

            <div class="hero-metrics animate-fade-up-delay-2">
              <div class="metric">
                <span class="metric-value">{{ t().hero.yearsValue }}</span>
                <span class="metric-label">{{ t().hero.stats.experience }}</span>
              </div>
              <div class="metric">
                <span class="metric-value">99.99%</span>
                <span class="metric-label">{{ t().hero.stats.availability }}</span>
              </div>
              <div class="metric">
                <span class="metric-value">15M+</span>
                <span class="metric-label">{{ t().hero.stats.throughput }}</span>
              </div>
              <div class="metric">
                <span class="metric-value">30+</span>
                <span class="metric-label">{{ t().hero.stats.services }}</span>
              </div>
            </div>
          </div>

          <div class="hero-terminal-wrap animate-fade-up-delay">
            <div class="terminal">
              <div class="terminal-bar">
                <div class="terminal-dots">
                  <span></span><span></span><span></span>
                </div>
                <span class="terminal-title">{{ t().hero.terminal.title }}</span>
                <span class="terminal-shell">zsh</span>
              </div>

              <div class="terminal-body font-mono">
                <div class="line dim">
                  <span class="prompt">$</span> probe --target=production-cluster --verbose
                </div>
                <div class="rule"></div>

                <div class="kv"><span>{{ t().hero.terminal.labels.engine }}</span><strong>{{ t().hero.terminal.engine }}</strong></div>
                <div class="kv"><span>{{ t().hero.terminal.labels.infra }}</span><strong>{{ t().hero.terminal.region }}</strong></div>
                <div class="kv"><span>{{ t().hero.terminal.labels.performance }}</span><strong class="ok">{{ t().hero.terminal.concurrency }}</strong></div>
                <div class="kv"><span>{{ t().hero.terminal.labels.protocols }}</span><strong>{{ t().hero.terminal.activeProtocols }}</strong></div>
                <div class="kv"><span>{{ t().hero.terminal.labels.uptime }}</span><strong class="accent">{{ uptimeSeconds() }}s · 99.992%</strong></div>

                <div class="rule"></div>

                <div class="live-box">
                  <div class="live-label">
                    <span class="live-pulse"></span>
                    {{ t().hero.terminal.status }}
                  </div>
                  <p>[OK] Healthcheck PASS · 0 deadlock alerts · DB pool 12/50</p>
                </div>

                <div class="cursor-line">
                  <span class="prompt accent">cluster-01 ›</span>
                  <span>{{ t().hero.terminal.ready }}</span>
                  <span class="blink"></span>
                </div>
              </div>
            </div>

            <div class="terminal-note">
              <span>
                <app-icon name="shield" [size]="13" color="#94a3b8"></app-icon>
                Zero Trust · RBAC
              </span>
              <span>TLS 1.3 · HTTP/2</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding: 8.5rem 0 5rem;
    }
    @media (min-width: 768px) {
      .hero { padding: 10rem 0 6.5rem; }
    }
    .hero-glow {
      position: absolute;
      pointer-events: none;
      filter: blur(70px);
      border-radius: 50%;
    }
    .hero-glow-a {
      width: 520px;
      height: 320px;
      top: -80px;
      left: 10%;
      background: rgba(29, 78, 216, 0.18);
    }
    .hero-glow-b {
      width: 420px;
      height: 320px;
      top: 40%;
      right: -80px;
      background: rgba(94, 234, 212, 0.06);
    }
    .hero-grid {
      display: grid;
      gap: 3rem;
      align-items: center;
    }
    @media (min-width: 1024px) {
      .hero-grid {
        grid-template-columns: 1.15fr 0.85fr;
        gap: 3.5rem;
      }
    }
    .hero-meta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.65rem;
      margin-bottom: 1.25rem;
    }
    .availability,
    .location {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      font-size: 0.8rem;
      font-weight: 500;
      padding: 0.3rem 0.7rem;
      border-radius: 0.25rem;
      border: 1px solid rgba(226, 232, 240, 0.12);
      background: rgba(30, 41, 59, 0.55);
    }
    .availability { color: #b7d0b7; }
    .location { color: rgba(226, 232, 240, 0.65); }
    .relocation {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      font-size: 0.8rem;
      font-weight: 600;
      padding: 0.3rem 0.7rem;
      border-radius: 0.25rem;
      border: 1px solid rgba(19, 78, 74, 0.9);
      background: rgba(19, 78, 74, 0.45);
      color: #e2e8f0;
    }
    .studying {
      display: inline-flex;
      align-items: center;
      gap: 0.45rem;
      font-size: 0.8rem;
      font-weight: 500;
      padding: 0.3rem 0.7rem;
      border-radius: 0.25rem;
      border: 1px solid rgba(94, 234, 212, 0.4);
      background: rgba(94, 234, 212, 0.12);
      color: #5eead4;
    }
    .hero-role {
      font-family: var(--font-mono);
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #5eead4;
      margin-bottom: 0.75rem;
    }
    .hero-name {
      font-family: var(--font-display);
      font-size: clamp(2.6rem, 6vw, 4.25rem);
      font-weight: 650;
      line-height: 1.02;
      letter-spacing: -0.035em;
      color: #e2e8f0;
      margin-bottom: 1.1rem;
      max-width: 12ch;
    }
    .hero-tagline {
      font-size: clamp(1.05rem, 2vw, 1.25rem);
      font-weight: 500;
      color: rgba(226, 232, 240, 0.88);
      margin-bottom: 0.85rem;
      max-width: 34rem;
      line-height: 1.45;
    }
    .hero-desc {
      font-size: 0.98rem;
      color: rgba(226, 232, 240, 0.58);
      max-width: 34rem;
      margin-bottom: 1.75rem;
      line-height: 1.7;
    }
    .hero-ctas {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-bottom: 2.25rem;
    }
    .hero-metrics {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.1rem 1.25rem;
      padding-top: 1.5rem;
      border-top: 1px solid rgba(226, 232, 240, 0.1);
    }
    @media (min-width: 640px) {
      .hero-metrics { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    }
    .metric-value {
      display: block;
      font-family: var(--font-display);
      font-size: 1.7rem;
      font-weight: 650;
      color: #5eead4;
      line-height: 1;
      margin-bottom: 0.3rem;
    }
    .metric-label {
      font-size: 0.72rem;
      color: rgba(226, 232, 240, 0.48);
      line-height: 1.3;
    }
    .terminal {
      background: #0c1324;
      border: 1px solid rgba(94, 234, 212, 0.28);
      border-radius: 0.4rem;
      overflow: hidden;
      box-shadow: 0 24px 50px rgba(2, 6, 23, 0.55);
    }
    .terminal-bar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.75rem;
      padding: 0.7rem 1rem;
      background: #1e293b;
      border-bottom: 1px solid rgba(226, 232, 240, 0.08);
    }
    .terminal-dots {
      display: flex;
      gap: 0.35rem;
    }
    .terminal-dots span {
      width: 0.55rem;
      height: 0.55rem;
      border-radius: 50%;
      background: #1e40af;
    }
    .terminal-dots span:nth-child(2) { background: #5eead4; }
    .terminal-dots span:nth-child(3) { background: #134e4a; }
    .terminal-title {
      font-family: var(--font-mono);
      font-size: 0.7rem;
      color: rgba(226, 232, 240, 0.5);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .terminal-shell {
      font-family: var(--font-mono);
      font-size: 0.65rem;
      color: rgba(226, 232, 240, 0.35);
    }
    .terminal-body {
      padding: 1.15rem;
      display: flex;
      flex-direction: column;
      gap: 0.65rem;
      font-size: 0.78rem;
      line-height: 1.55;
    }
    .line.dim { color: rgba(226, 232, 240, 0.55); }
    .prompt { color: #94a3b8; margin-right: 0.35rem; }
    .prompt.accent { color: #5eead4; }
    .rule {
      height: 1px;
      background: rgba(226, 232, 240, 0.08);
      margin: 0.15rem 0;
    }
    .kv {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      color: rgba(226, 232, 240, 0.55);
    }
    .kv strong {
      color: #e2e8f0;
      font-weight: 600;
      text-align: right;
    }
    .kv strong.ok { color: #b7d0b7; }
    .kv strong.accent { color: #5eead4; }
    .live-box {
      background: rgba(19, 78, 74, 0.28);
      border: 1px solid rgba(19, 78, 74, 0.55);
      border-radius: 0.3rem;
      padding: 0.65rem 0.8rem;
    }
    .live-label {
      display: flex;
      align-items: center;
      gap: 0.45rem;
      color: #b7d0b7;
      font-weight: 700;
      margin-bottom: 0.25rem;
    }
    .live-box p { color: rgba(226, 232, 240, 0.5); font-size: 0.7rem; }
    .live-pulse {
      width: 0.45rem;
      height: 0.45rem;
      border-radius: 50%;
      background: #b7d0b7;
      animation: pulse 1.5s ease infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.35; }
    }
    .cursor-line {
      display: flex;
      align-items: center;
      gap: 0.35rem;
      color: rgba(226, 232, 240, 0.55);
      padding-top: 0.2rem;
    }
    .blink {
      width: 7px;
      height: 14px;
      background: #5eead4;
      animation: blink 1s step-start infinite;
    }
    @keyframes blink {
      50% { opacity: 0; }
    }
    .terminal-note {
      display: flex;
      justify-content: space-between;
      margin-top: 0.85rem;
      padding: 0 0.35rem;
      font-family: var(--font-mono);
      font-size: 0.68rem;
      color: rgba(226, 232, 240, 0.4);
    }
    .terminal-note span {
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
    }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  public readonly i18n = inject(I18nService);
  public readonly data = inject(PortfolioDataService);
  private readonly platformId = inject(PLATFORM_ID);

  public readonly t = this.i18n.t;
  public readonly uptimeSeconds = signal<number>(849210);
  private timerRef: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.timerRef = setInterval(() => {
        this.uptimeSeconds.update(v => v + 1);
      }, 1000);
    }
  }

  ngOnDestroy(): void {
    if (this.timerRef) {
      clearInterval(this.timerRef);
    }
  }
}
