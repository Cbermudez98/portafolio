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
    <section class="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      
      <!-- Ambient Glow Behind Hero -->
      <div class="ambient-glow -top-32 left-1/2 -translate-x-1/2"></div>
      <div class="ambient-glow-emerald top-48 -right-32"></div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <!-- Left Column: Copy & Actions -->
          <div class="lg:col-span-7 flex flex-col items-start text-left">
            
            <!-- Availability & Location Badges -->
            <div class="flex flex-wrap items-center gap-2.5 mb-6">
              <div class="badge-status">
                <span class="status-dot"></span>
                <span>{{ t().hero.availableBadge }}</span>
              </div>
              <div class="badge-location">
                <app-icon name="globe" [size]="14" color="#94a3b8"></app-icon>
                <span>{{ t().hero.location }}</span>
              </div>
            </div>

            <!-- Main Title & Name -->
            <div class="mb-4">
              <span class="font-mono text-cyan-400 text-sm md:text-base font-semibold tracking-wider uppercase mb-2 block">
                {{ t().hero.role }}
              </span>
              <h1 class="hero-title text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Cesar Bermudez Sierra
              </h1>
            </div>

            <!-- Tagline -->
            <p class="hero-tagline text-lg sm:text-xl font-medium text-slate-200 mb-4 max-w-2xl">
              {{ t().hero.tagline }}
            </p>

            <!-- Detailed Description -->
            <p class="text-base text-slate-400 leading-relaxed mb-8 max-w-2xl">
              {{ t().hero.description }}
            </p>

            <!-- CTAs -->
            <div class="flex flex-wrap items-center gap-4 mb-12 w-full sm:w-auto">
              <a href="#projects" class="btn btn-primary w-full sm:w-auto">
                <app-icon name="layers" [size]="18"></app-icon>
                <span>{{ t().hero.ctaProjects }}</span>
              </a>

              <a href="#architecture" class="btn btn-outline-cyan w-full sm:w-auto">
                <app-icon name="activity" [size]="18"></app-icon>
                <span>{{ t().hero.ctaPlayground }}</span>
              </a>

              <a href="#contact" class="btn btn-secondary w-full sm:w-auto">
                <app-icon name="mail" [size]="18"></app-icon>
                <span>{{ t().hero.ctaContact }}</span>
              </a>
            </div>

            <!-- Core Metrics Counter Grid -->
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-6 border-t border-slate-800/80">
              <div class="metric-card">
                <span class="metric-value text-cyan-400">6+</span>
                <span class="metric-label">{{ t().hero.stats.experience }}</span>
              </div>

              <div class="metric-card">
                <span class="metric-value text-emerald-400">99.99%</span>
                <span class="metric-label">{{ t().hero.stats.availability }}</span>
              </div>

              <div class="metric-card">
                <span class="metric-value text-indigo-400">15M+</span>
                <span class="metric-label">{{ t().hero.stats.throughput }}</span>
              </div>

              <div class="metric-card">
                <span class="metric-value text-sky-400">30+</span>
                <span class="metric-label">{{ t().hero.stats.services }}</span>
              </div>
            </div>

          </div>

          <!-- Right Column: Interactive Terminal Box -->
          <div class="lg:col-span-5 w-full">
            <div class="terminal-window shadow-2xl">
              
              <!-- Terminal Titlebar -->
              <div class="terminal-header">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                </div>
                <div class="terminal-title">
                  {{ t().hero.terminal.title }}
                </div>
                <div class="w-12 text-right">
                  <span class="font-mono text-xs text-slate-500">zsh</span>
                </div>
              </div>

              <!-- Terminal Body -->
              <div class="terminal-body font-mono text-xs sm:text-sm">
                
                <div class="terminal-line text-slate-400">
                  <span class="text-emerald-400">$</span> probe --target=production-cluster --verbose
                </div>

                <div class="terminal-divider"></div>

                <div class="flex items-center justify-between text-slate-300">
                  <span class="text-slate-400">ENGINE:</span>
                  <span class="text-cyan-300 font-semibold">{{ t().hero.terminal.engine }}</span>
                </div>

                <div class="flex items-center justify-between text-slate-300">
                  <span class="text-slate-400">INFRASTRUCTURE:</span>
                  <span class="text-slate-200">{{ t().hero.terminal.region }}</span>
                </div>

                <div class="flex items-center justify-between text-slate-300">
                  <span class="text-slate-400">PERFORMANCE:</span>
                  <span class="text-emerald-400 font-semibold">{{ t().hero.terminal.concurrency }}</span>
                </div>

                <div class="flex items-center justify-between text-slate-300">
                  <span class="text-slate-400">PROTOCOLS:</span>
                  <span class="text-indigo-300">{{ t().hero.terminal.activeProtocols }}</span>
                </div>

                <div class="flex items-center justify-between text-slate-300">
                  <span class="text-slate-400">UPTIME CLOCK:</span>
                  <span class="text-amber-300 font-mono">{{ uptimeSeconds() }}s (99.992%)</span>
                </div>

                <div class="terminal-divider"></div>

                <!-- Live Stream Probe Log -->
                <div class="terminal-log-box">
                  <div class="flex items-center gap-2 text-emerald-400 font-bold">
                    <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>{{ t().hero.terminal.status }}</span>
                  </div>
                  <div class="text-slate-400 text-xs mt-1">
                    [OK] Healthcheck PASS | 0 deadlock alerts | DB conn pool: 12/50
                  </div>
                </div>

                <!-- Cursor line -->
                <div class="flex items-center gap-1 text-slate-400 pt-2">
                  <span class="text-cyan-400">cluster-01 &#62;</span>
                  <span class="typing-text">ready for new workloads</span>
                  <span class="blinking-cursor"></span>
                </div>

              </div>

            </div>

            <!-- Terminal Footnote Badge -->
            <div class="mt-4 flex items-center justify-between px-3 text-xs font-mono text-slate-500">
              <span class="flex items-center gap-1.5">
                <app-icon name="shield" [size]="14" color="#10b981"></app-icon>
                <span>Zero Trust • RBAC Secured</span>
              </span>
              <span>TLS 1.3 • HTTP/2</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .ambient-glow {
      position: absolute;
      width: 600px;
      height: 350px;
      background: radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(14, 165, 233, 0) 70%);
      pointer-events: none;
      filter: blur(60px);
    }
    .ambient-glow-emerald {
      position: absolute;
      width: 450px;
      height: 350px;
      background: radial-gradient(circle, rgba(16, 185, 129, 0.12) 0%, transparent 70%);
      pointer-events: none;
      filter: blur(60px);
    }
    .badge-status {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.35rem 0.85rem;
      border-radius: 9999px;
      font-size: 0.825rem;
      font-weight: 600;
      color: #34d399;
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.25);
    }
    .badge-location {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.35rem 0.85rem;
      border-radius: 9999px;
      font-size: 0.825rem;
      font-weight: 500;
      color: #94a3b8;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    .hero-title {
      background: linear-gradient(135deg, #ffffff 40%, #94a3b8 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .metric-card {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }
    .metric-value {
      font-family: var(--font-mono);
      font-size: 1.85rem;
      font-weight: 800;
      line-height: 1;
    }
    .metric-label {
      font-size: 0.775rem;
      color: #94a3b8;
      line-height: 1.3;
    }
    .terminal-window {
      background: #090d16;
      border: 1px solid rgba(56, 189, 248, 0.2);
      border-radius: 0.875rem;
      overflow: hidden;
      box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.8), 0 0 25px rgba(56, 189, 248, 0.08);
    }
    .terminal-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.75rem 1rem;
      background: #0f172a;
      border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    }
    .terminal-title {
      font-family: var(--font-mono);
      font-size: 0.75rem;
      color: #94a3b8;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      max-width: 250px;
    }
    .terminal-body {
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      line-height: 1.6;
    }
    .terminal-divider {
      height: 1px;
      background: rgba(255, 255, 255, 0.06);
      margin: 0.25rem 0;
    }
    .terminal-log-box {
      background: rgba(16, 185, 129, 0.06);
      border: 1px solid rgba(16, 185, 129, 0.15);
      border-radius: 0.5rem;
      padding: 0.6rem 0.85rem;
    }
    .blinking-cursor {
      display: inline-block;
      width: 7px;
      height: 15px;
      background: #38bdf8;
      animation: blink 1s step-start infinite;
      vertical-align: middle;
    }
    @keyframes blink {
      50% { opacity: 0; }
    }
    .grid { display: grid; }
    .flex { display: flex; }
    .flex-col { flex-direction: column; }
    .gap-4 { gap: 1rem; }
    .items-center { align-items: center; }
    .justify-between { justify-content: space-between; }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  public readonly i18n = inject(I18nService);
  public readonly data = inject(PortfolioDataService);
  private readonly platformId = inject(PLATFORM_ID);

  public readonly t = this.i18n.t;
  public readonly uptimeSeconds = signal<number>(849210);
  private timerRef: any = null;

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
