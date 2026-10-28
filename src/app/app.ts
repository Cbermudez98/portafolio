import { Component, DestroyRef, ElementRef, afterNextRender, inject, signal, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './features/navbar/navbar.component';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { EducationComponent } from './features/education/education.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';
import { FooterComponent } from './features/footer/footer.component';
import { I18nService } from './core/services/i18n.service';
import { ScrollRevealService } from './core/services/scroll-reveal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public readonly i18n = inject(I18nService);
  public readonly scrollProgress = signal(0);

  private readonly reveal = inject(ScrollRevealService);
  private readonly spotlight = viewChild<ElementRef<HTMLElement>>('spotlight');
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      this.reveal.init();

      const onScroll = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        this.scrollProgress.set(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });

      // Spotlight follows the cursor; written straight to CSS vars to avoid change detection
      const onMove = (e: PointerEvent) => {
        const el = this.spotlight()?.nativeElement;
        el?.style.setProperty('--spot-x', `${e.clientX}px`);
        el?.style.setProperty('--spot-y', `${e.clientY}px`);
      };
      window.addEventListener('pointermove', onMove, { passive: true });

      this.destroyRef.onDestroy(() => {
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('scroll', onScroll);
        this.reveal.destroy();
      });
    });
  }
}
