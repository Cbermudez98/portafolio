import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/services/i18n.service';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="about" class="section bg-slate-950/40 border-t border-slate-900">
      <div class="container">
        
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-eyebrow">
            <app-icon name="shield" [size]="14"></app-icon>
            <span>{{ t().about.eyebrow }}</span>
          </div>
          <h2 class="section-title">{{ t().about.title }}</h2>
          <p class="section-subtitle">{{ t().about.intro }}</p>
        </div>

        <!-- Main Narrative & Principles Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          <!-- Narrative Left Column -->
          <div class="lg:col-span-5 flex flex-col gap-5">
            <div class="glass-card p-6 sm:p-8">
              <h3 class="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>The Engineering Journey</span>
              </h3>
              <p class="text-slate-300 leading-relaxed mb-4 text-sm sm:text-base">
                {{ t().about.p1 }}
              </p>
              <p class="text-slate-400 leading-relaxed text-sm sm:text-base">
                {{ t().about.p2 }}
              </p>

              <!-- Quick Highlights Box -->
              <div class="mt-6 pt-6 border-t border-slate-800/80 flex flex-col gap-3 font-mono text-xs text-slate-300">
                <div class="flex items-center gap-2">
                  <app-icon name="check" [size]="14" color="#10b981"></app-icon>
                  <span>Specialist in Node.js, NestJS, Go, Python & SQL</span>
                </div>
                <div class="flex items-center gap-2">
                  <app-icon name="check" [size]="14" color="#10b981"></app-icon>
                  <span>Production cloud architecture on AWS & Docker</span>
                </div>
                <div class="flex items-center gap-2">
                  <app-icon name="check" [size]="14" color="#10b981"></app-icon>
                  <span>Former Web Technologies Instructor at Unicolombo</span>
                </div>
              </div>
            </div>

            <!-- Quote Card -->
            <div class="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/20 to-slate-900 border border-cyan-500/20 text-slate-300 italic text-sm">
              <span class="text-cyan-400 text-2xl font-serif leading-none block mb-1">“</span>
              Great backend code is rarely flashy. It is predictable, self-healing under extreme spikes, guarded against race conditions, and effortless for other developers to extend with confidence.
              <span class="block mt-3 font-mono text-xs text-cyan-400 not-italic font-semibold">— Cesar Bermudez Sierra</span>
            </div>
          </div>

          <!-- Principles Right Column: 4 Cards -->
          <div class="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            @for (principle of t().about.principles; track principle.title) {
              <div class="glass-card p-6 flex flex-col justify-between group hover:border-cyan-500/30">
                <div>
                  <div class="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 flex items-center justify-center mb-4 transition-colors">
                    <app-icon [name]="principle.icon" [size]="22" color="#38bdf8"></app-icon>
                  </div>
                  <h4 class="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {{ principle.title }}
                  </h4>
                  <p class="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {{ principle.description }}
                  </p>
                </div>
                <div class="mt-4 pt-4 border-t border-slate-800/60 flex items-center gap-2 font-mono text-xs text-slate-500">
                  <span class="w-1 h-1 rounded-full bg-cyan-400"></span>
                  <span>Production Standard</span>
                </div>
              </div>
            }
          </div>

        </div>

      </div>
    </section>
  `,
  styles: [`
    .grid { display: grid; }
    .flex { display: flex; }
    .flex-col { flex-direction: column; }
    .items-center { align-items: center; }
    .justify-between { justify-content: space-between; }
    .gap-4 { gap: 1rem; }
    .gap-8 { gap: 2rem; }
  `]
})
export class AboutComponent {
  public readonly i18n = inject(I18nService);
  public readonly data = inject(PortfolioDataService);
  public readonly t = this.i18n.t;
}
