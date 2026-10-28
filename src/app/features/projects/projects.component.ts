import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/services/i18n.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="projects" class="section bg-slate-950/40 border-t border-slate-900">
      <div class="container">
        
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-eyebrow">
            <app-icon name="layers" [size]="14"></app-icon>
            <span>{{ t().projects.eyebrow }}</span>
          </div>
          <h2 class="section-title">{{ t().projects.title }}</h2>
          <p class="section-subtitle">{{ t().projects.subtitle }}</p>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          @for (proj of t().projects.items; track proj.id) {
            <div class="project-card glass-card flex flex-col justify-between group">
              
              <!-- Card Top -->
              <div>
                <div class="flex items-center justify-between mb-4">
                  <div class="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 flex items-center justify-center transition-colors">
                    <app-icon [name]="proj.icon" [size]="22" color="#38bdf8"></app-icon>
                  </div>

                  <a 
                    [href]="proj.githubUrl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-colors"
                    [attr.aria-label]="'View source code for ' + proj.title">
                    <app-icon name="github" [size]="18"></app-icon>
                  </a>
                </div>

                <span class="font-mono text-xs text-cyan-400 uppercase tracking-wider block mb-1">
                  {{ proj.category }}
                </span>
                
                <h3 class="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {{ proj.title }}
                </h3>

                <p class="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {{ proj.description }}
                </p>

                <!-- Architecture Highlights -->
                <div class="mb-4 pt-3 border-t border-slate-800/80">
                  <span class="font-mono text-xs text-slate-400 block mb-2 font-semibold">
                    {{ t().projects.highlightsTitle }}
                  </span>
                  <ul class="flex flex-col gap-2">
                    @for (item of proj.architectureHighlights; track item) {
                      <li class="flex items-start gap-2 text-xs text-slate-400">
                        <span class="text-cyan-400 font-bold shrink-0">▸</span>
                        <span class="leading-normal">{{ item }}</span>
                      </li>
                    }
                  </ul>
                </div>
              </div>

              <!-- Card Bottom: Metrics & Tech Stack -->
              <div class="pt-4 border-t border-slate-800/80">
                <!-- Metrics callout -->
                <div class="flex items-center gap-2 mb-3 px-2.5 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 font-mono text-xs text-emerald-400">
                  <app-icon name="activity" [size]="13" color="#10b981"></app-icon>
                  <span>{{ proj.metrics }}</span>
                </div>

                <!-- Tags -->
                <div class="flex flex-wrap gap-1.5 mb-4">
                  @for (tag of proj.tags; track tag) {
                    <span class="tech-tag text-xs">{{ tag }}</span>
                  }
                </div>

                <!-- GitHub CTA link -->
                <a 
                  [href]="proj.githubUrl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="flex items-center justify-between text-xs font-mono font-semibold text-slate-300 hover:text-cyan-300 transition-colors pt-2">
                  <span>{{ t().projects.viewCode }}</span>
                  <app-icon name="external-link" [size]="13"></app-icon>
                </a>
              </div>

            </div>
          }
        </div>

      </div>
    </section>
  `,
  styles: [`
    .project-card {
      padding: 1.5rem;
      transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
    }
    .project-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(56, 189, 248, 0.12);
    }
    .grid { display: grid; }
    .flex { display: flex; }
    .flex-col { flex-direction: column; }
    .items-center { align-items: center; }
    .justify-between { justify-content: space-between; }
    .gap-6 { gap: 1.5rem; }
  `]
})
export class ProjectsComponent {
  public readonly i18n = inject(I18nService);
  public readonly t = this.i18n.t;
}
