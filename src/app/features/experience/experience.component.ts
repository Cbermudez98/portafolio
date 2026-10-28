import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/services/i18n.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="experience" class="section">
      <div class="container">
        
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-eyebrow">
            <app-icon name="activity" [size]="14"></app-icon>
            <span>{{ t().experience.eyebrow }}</span>
          </div>
          <h2 class="section-title">{{ t().experience.title }}</h2>
          <p class="section-subtitle">{{ t().experience.subtitle }}</p>
        </div>

        <!-- Experience Timeline Layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <!-- Company Selector Sidebar -->
          <div class="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-none">
            @for (exp of t().experience.items; track exp.id; let idx = $index) {
              <button 
                type="button"
                (click)="selectedCompanyIndex.set(idx)"
                class="company-btn text-left"
                [class.company-btn-active]="selectedCompanyIndex() === idx">
                <div class="flex items-center justify-between w-full">
                  <span class="font-bold text-sm sm:text-base">{{ exp.company }}</span>
                  <span class="font-mono text-xs text-slate-400 hidden sm:inline-block">{{ exp.period }}</span>
                </div>
                <div class="text-xs text-slate-400 mt-0.5 truncate">
                  {{ exp.role }}
                </div>
              </button>
            }
          </div>

          <!-- Active Experience Details Card -->
          <div class="lg:col-span-8">
            @if (activeExp(); as exp) {
              <div class="glass-card p-6 sm:p-8 relative overflow-hidden">
                
                <div class="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-bl-full pointer-events-none"></div>

                <div class="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
                  <div>
                    <span class="font-mono text-xs uppercase tracking-wider text-cyan-400 block mb-1">
                      {{ exp.type }} • {{ exp.location }}
                    </span>
                    <h3 class="text-2xl font-bold text-white">{{ exp.role }}</h3>
                    <h4 class="text-lg font-semibold text-cyan-300">{{ exp.company }}</h4>
                  </div>
                  <div class="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs text-slate-300">
                    {{ exp.period }}
                  </div>
                </div>

                <p class="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {{ exp.description }}
                </p>

                <!-- Key Achievements -->
                <div class="mb-6">
                  <h5 class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
                    <app-icon name="check" [size]="14" color="#10b981"></app-icon>
                    <span>Key Architectural Deliverables & Impact</span>
                  </h5>
                  <ul class="flex flex-col gap-3">
                    @for (item of exp.achievements; track item) {
                      <li class="flex items-start gap-3 text-sm text-slate-300">
                        <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                        <span class="leading-relaxed">{{ item }}</span>
                      </li>
                    }
                  </ul>
                </div>

                <!-- Technologies Used -->
                <div>
                  <h5 class="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                    Core Technologies
                  </h5>
                  <div class="flex flex-wrap gap-2">
                    @for (tech of exp.technologies; track tech) {
                      <span class="tech-tag">{{ tech }}</span>
                    }
                  </div>
                </div>

              </div>
            }
          </div>

        </div>

      </div>
    </section>
  `,
  styles: [`
    .company-btn {
      padding: 0.9rem 1.15rem;
      border-radius: 0.75rem;
      background: rgba(15, 23, 42, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.05);
      color: #94a3b8;
      transition: all 0.2s ease;
      min-width: 170px;
    }
    .company-btn:hover {
      background: rgba(30, 41, 59, 0.5);
      color: #f1f5f9;
      border-color: rgba(56, 189, 248, 0.2);
    }
    .company-btn-active {
      background: rgba(56, 189, 248, 0.12);
      border-color: rgba(56, 189, 248, 0.4);
      color: #ffffff;
      box-shadow: 0 0 15px rgba(56, 189, 248, 0.12);
    }
    .scrollbar-none::-webkit-scrollbar {
      display: none;
    }
    .grid { display: grid; }
    .flex { display: flex; }
    .flex-col { flex-direction: column; }
    .items-center { align-items: center; }
    .justify-between { justify-content: space-between; }
    .gap-2 { gap: 0.5rem; }
    .gap-4 { gap: 1rem; }
    .gap-8 { gap: 2rem; }
  `]
})
export class ExperienceComponent {
  public readonly i18n = inject(I18nService);
  public readonly t = this.i18n.t;

  public readonly selectedCompanyIndex = signal<number>(0);

  public activeExp() {
    const items = this.t().experience.items;
    const idx = this.selectedCompanyIndex();
    return items[idx] || items[0];
  }
}
