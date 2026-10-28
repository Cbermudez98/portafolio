import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/services/i18n.service';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { SkillItem } from '../../core/models/portfolio.model';

type SkillCategory = 'all' | 'languages' | 'frameworks' | 'databases' | 'cloud' | 'architecture';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="skills" class="section bg-slate-950/60 border-t border-slate-900">
      <div class="container">
        
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-eyebrow">
            <app-icon name="code" [size]="14"></app-icon>
            <span>{{ t().skills.eyebrow }}</span>
          </div>
          <h2 class="section-title">{{ t().skills.title }}</h2>
          <p class="section-subtitle">{{ t().skills.subtitle }}</p>
        </div>

        <!-- Filter Buttons -->
        <div class="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button 
            type="button" 
            (click)="selectedCategory.set('all')"
            class="filter-pill" 
            [class.filter-pill-active]="selectedCategory() === 'all'">
            {{ t().skills.filterAll }}
          </button>
          <button 
            type="button" 
            (click)="selectedCategory.set('languages')"
            class="filter-pill" 
            [class.filter-pill-active]="selectedCategory() === 'languages'">
            {{ t().skills.filterLanguages }}
          </button>
          <button 
            type="button" 
            (click)="selectedCategory.set('frameworks')"
            class="filter-pill" 
            [class.filter-pill-active]="selectedCategory() === 'frameworks'">
            {{ t().skills.filterFrameworks }}
          </button>
          <button 
            type="button" 
            (click)="selectedCategory.set('databases')"
            class="filter-pill" 
            [class.filter-pill-active]="selectedCategory() === 'databases'">
            {{ t().skills.filterDatabases }}
          </button>
          <button 
            type="button" 
            (click)="selectedCategory.set('cloud')"
            class="filter-pill" 
            [class.filter-pill-active]="selectedCategory() === 'cloud'">
            {{ t().skills.filterCloud }}
          </button>
          <button 
            type="button" 
            (click)="selectedCategory.set('architecture')"
            class="filter-pill" 
            [class.filter-pill-active]="selectedCategory() === 'architecture'">
            {{ t().skills.filterArch }}
          </button>
        </div>

        <!-- Skills Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          @for (skill of filteredSkills(); track skill.name) {
            <div class="skill-card glass-card p-5 group">
              <div class="flex items-center justify-between mb-3">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 flex items-center justify-center transition-colors">
                    <app-icon [name]="skill.icon" [size]="18" color="#38bdf8"></app-icon>
                  </div>
                  <div>
                    <h4 class="font-bold text-white text-sm group-hover:text-cyan-300 transition-colors">
                      {{ skill.name }}
                    </h4>
                    <span class="font-mono text-xs text-slate-500 uppercase">
                      {{ skill.category }}
                    </span>
                  </div>
                </div>

                <div class="font-mono text-xs font-semibold text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-800/40">
                  {{ skill.proficiency }}%
                </div>
              </div>

              <!-- Meter Bar -->
              <div class="w-full bg-slate-800/80 rounded-full h-1.5 overflow-hidden">
                <div 
                  class="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 transition-all duration-700"
                  [style.width.%]="skill.proficiency">
                </div>
              </div>
            </div>
          }
        </div>

      </div>
    </section>
  `,
  styles: [`
    .filter-pill {
      padding: 0.5rem 1rem;
      border-radius: 9999px;
      font-size: 0.825rem;
      font-weight: 500;
      color: #94a3b8;
      background: rgba(15, 23, 42, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.08);
      transition: all 0.2s ease;
    }
    .filter-pill:hover {
      color: #ffffff;
      border-color: rgba(56, 189, 248, 0.3);
      background: rgba(30, 41, 59, 0.7);
    }
    .filter-pill-active {
      background: rgba(56, 189, 248, 0.15);
      border-color: rgba(56, 189, 248, 0.5);
      color: #38bdf8;
      font-weight: 600;
    }
    .skill-card {
      transition: transform 0.2s ease, border-color 0.2s ease;
    }
    .skill-card:hover {
      transform: translateY(-2px);
    }
    .grid { display: grid; }
    .flex { display: flex; }
    .items-center { align-items: center; }
    .justify-center { justify-content: center; }
    .justify-between { justify-content: space-between; }
    .gap-2 { gap: 0.5rem; }
    .gap-3 { gap: 0.75rem; }
    .gap-4 { gap: 1rem; }
  `]
})
export class SkillsComponent {
  public readonly i18n = inject(I18nService);
  public readonly data = inject(PortfolioDataService);
  public readonly t = this.i18n.t;

  public readonly selectedCategory = signal<SkillCategory>('all');

  public readonly filteredSkills = computed(() => {
    const category = this.selectedCategory();
    const all = this.data.skills;
    if (category === 'all') return all;
    return all.filter(s => s.category === category);
  });
}
