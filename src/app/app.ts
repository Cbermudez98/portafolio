import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './features/navbar/navbar.component';
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from './features/about/about.component';
import { ExperienceComponent } from './features/experience/experience.component';
import { SkillsComponent } from './features/skills/skills.component';
import { ArchitectureDemoComponent } from './features/architecture-demo/architecture-demo.component';
import { ProjectsComponent } from './features/projects/projects.component';
import { ContactComponent } from './features/contact/contact.component';
import { FooterComponent } from './features/footer/footer.component';
import { I18nService } from './core/services/i18n.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    SkillsComponent,
    ArchitectureDemoComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  public readonly i18n = inject(I18nService);
}
