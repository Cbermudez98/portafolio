import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/services/i18n.service';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <footer class="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      
      <div class="container">
        
        <div class="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          <!-- Column 1: Brand & Summary -->
          <div class="md:col-span-5 flex flex-col gap-4">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-slate-900 border border-cyan-500/30 flex items-center justify-center">
                <span class="font-mono text-base font-bold text-cyan-400">&lt;CB/&gt;</span>
              </div>
              <span class="font-bold text-white text-lg">Cesar Bermudez Sierra</span>
            </div>
            
            <p class="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {{ t().footer.bio }}
            </p>

            <div class="flex items-center gap-2 font-mono text-xs text-emerald-400">
              <span class="status-dot"></span>
              <span>{{ t().footer.status }}</span>
            </div>
          </div>

          <!-- Column 2: Navigation Links -->
          <div class="md:col-span-4 flex flex-col gap-3">
            <h4 class="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
              {{ t().footer.quickLinks }}
            </h4>
            <div class="grid grid-cols-2 gap-2 text-sm text-slate-400">
              <a href="#about" class="hover:text-cyan-300 transition-colors">{{ t().nav.about }}</a>
              <a href="#experience" class="hover:text-cyan-300 transition-colors">{{ t().nav.experience }}</a>
              <a href="#skills" class="hover:text-cyan-300 transition-colors">{{ t().nav.skills }}</a>
              <a href="#architecture" class="hover:text-cyan-300 transition-colors">{{ t().nav.architecture }}</a>
              <a href="#projects" class="hover:text-cyan-300 transition-colors">{{ t().nav.projects }}</a>
              <a href="#contact" class="hover:text-cyan-300 transition-colors">{{ t().nav.contact }}</a>
            </div>
          </div>

          <!-- Column 3: Connect & Socials -->
          <div class="md:col-span-3 flex flex-col gap-3">
            <h4 class="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">
              {{ t().footer.socials }}
            </h4>
            <div class="flex flex-col gap-2.5 text-sm text-slate-400">
              <a 
                [href]="data.personalInfo.linkedin" 
                target="_blank" 
                rel="noopener"
                class="flex items-center gap-2.5 hover:text-cyan-300 transition-colors">
                <app-icon name="linkedin" [size]="16"></app-icon>
                <span>LinkedIn</span>
              </a>
              <a 
                [href]="data.personalInfo.github" 
                target="_blank" 
                rel="noopener"
                class="flex items-center gap-2.5 hover:text-cyan-300 transition-colors">
                <app-icon name="github" [size]="16"></app-icon>
                <span>GitHub</span>
              </a>
              <a 
                [href]="'mailto:' + data.personalInfo.email"
                class="flex items-center gap-2.5 hover:text-cyan-300 transition-colors">
                <app-icon name="mail" [size]="16"></app-icon>
                <span>Email</span>
              </a>
            </div>
          </div>

        </div>

        <!-- Copyright Row -->
        <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {{ currentYear }} {{ t().footer.copyright }}
          </div>
          <div class="text-slate-500">
            {{ t().footer.designedFor }}
          </div>
        </div>

      </div>

    </footer>
  `,
  styles: [`
    .grid { display: grid; }
    .flex { display: flex; }
    .flex-col { flex-direction: column; }
    .items-center { align-items: center; }
    .justify-between { justify-content: space-between; }
    .gap-2 { gap: 0.5rem; }
    .gap-3 { gap: 0.75rem; }
    .gap-4 { gap: 1rem; }
    .gap-10 { gap: 2.5rem; }
  `]
})
export class FooterComponent {
  public readonly i18n = inject(I18nService);
  public readonly data = inject(PortfolioDataService);
  public readonly t = this.i18n.t;
  public readonly currentYear = new Date().getFullYear();
}
