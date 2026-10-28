import { Component, inject, signal, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { I18nService } from '../../core/services/i18n.service';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { IconComponent } from '../../shared/components/icon/icon.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  template: `
    <section id="contact" class="section">
      <div class="container">
        
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-eyebrow">
            <app-icon name="mail" [size]="14"></app-icon>
            <span>{{ t().contact.eyebrow }}</span>
          </div>
          <h2 class="section-title">{{ t().contact.title }}</h2>
          <p class="section-subtitle">{{ t().contact.subtitle }}</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          <!-- Left Column: Contact Cards & Channels -->
          <div class="lg:col-span-5 flex flex-col gap-4">
            
            <!-- Email Card with Copy button -->
            <div class="glass-card p-6 flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between mb-3">
                  <span class="font-mono text-xs uppercase tracking-wider text-slate-400">
                    {{ t().contact.emailLabel }}
                  </span>
                  <app-icon name="mail" [size]="18" color="#38bdf8"></app-icon>
                </div>
                <div class="font-mono text-base font-bold text-white mb-2 break-all">
                  {{ data.personalInfo.email }}
                </div>
                <p class="text-xs text-slate-400 mb-4">
                  For recruitment, technical interviews, or distributed systems consulting.
                </p>
              </div>

              <div class="flex items-center gap-2">
                <button 
                  type="button"
                  (click)="copyEmailToClipboard()"
                  class="btn btn-secondary text-xs py-2 px-3 flex-1 flex items-center justify-center gap-2">
                  <app-icon [name]="emailCopied() ? 'check' : 'copy'" [size]="14" [color]="emailCopied() ? '#10b981' : 'currentColor'"></app-icon>
                  <span>{{ emailCopied() ? t().contact.emailCopied : t().contact.copyEmail }}</span>
                </button>

                <a 
                  [href]="'mailto:' + data.personalInfo.email"
                  class="btn btn-outline-cyan text-xs py-2 px-3">
                  <app-icon name="external-link" [size]="14"></app-icon>
                </a>
              </div>
            </div>

            <!-- LinkedIn Card -->
            <a 
              [href]="data.personalInfo.linkedin" 
              target="_blank" 
              rel="noopener noreferrer"
              class="glass-card p-6 flex items-center justify-between group hover:border-cyan-500/40">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 flex items-center justify-center transition-colors">
                  <app-icon name="linkedin" [size]="22" color="#38bdf8"></app-icon>
                </div>
                <div>
                  <span class="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                    {{ t().contact.linkedinLabel }}
                  </span>
                  <span class="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                    /in/cesar-bermudez-sierra
                  </span>
                </div>
              </div>
              <app-icon name="arrow-right" [size]="18" color="#94a3b8"></app-icon>
            </a>

            <!-- GitHub Card -->
            <a 
              [href]="data.personalInfo.github" 
              target="_blank" 
              rel="noopener noreferrer"
              class="glass-card p-6 flex items-center justify-between group hover:border-cyan-500/40">
              <div class="flex items-center gap-4">
                <div class="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-cyan-500/40 flex items-center justify-center transition-colors">
                  <app-icon name="github" [size]="22" color="#38bdf8"></app-icon>
                </div>
                <div>
                  <span class="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                    {{ t().contact.githubLabel }}
                  </span>
                  <span class="font-bold text-white text-base group-hover:text-cyan-300 transition-colors">
                    &#64;{{ data.personalInfo.handle }}
                  </span>
                </div>
              </div>
              <app-icon name="arrow-right" [size]="18" color="#94a3b8"></app-icon>
            </a>

            <!-- Location Card -->
            <div class="glass-card p-5 flex items-center gap-3">
              <div class="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                <app-icon name="globe" [size]="18" color="#10b981"></app-icon>
              </div>
              <div>
                <span class="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                  {{ t().contact.locationLabel }}
                </span>
                <span class="font-bold text-slate-200 text-sm">
                  {{ t().contact.locationValue }}
                </span>
              </div>
            </div>

          </div>

          <!-- Right Column: Interactive Contact Form -->
          <div class="lg:col-span-7">
            <div class="glass-card p-6 sm:p-8">
              
              <h3 class="text-xl font-bold text-white mb-2">
                Send a Direct Message
              </h3>
              <p class="text-slate-400 text-sm mb-6">
                Fill out the form below to initiate discussions regarding backend engineering roles or consulting.
              </p>

              @if (isSubmitted()) {
                <div class="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 mb-6">
                  <div class="flex items-center gap-3 mb-2 font-bold text-emerald-400 text-base">
                    <app-icon name="check" [size]="20" color="#34d399"></app-icon>
                    <span>Message Dispatched!</span>
                  </div>
                  <p class="text-xs sm:text-sm text-emerald-300 leading-relaxed mb-4">
                    {{ t().contact.form.success }}
                  </p>
                  <button 
                    type="button"
                    (click)="isSubmitted.set(false)"
                    class="btn btn-secondary text-xs py-1.5 px-3">
                    Send Another Message
                  </button>
                </div>
              } @else {
                <form (ngSubmit)="submitForm()" class="flex flex-col gap-4">
                  
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <!-- Name Input -->
                    <div>
                      <label for="contact-name" class="form-label">{{ t().contact.form.name }} *</label>
                      <input 
                        id="contact-name"
                        type="text" 
                        [(ngModel)]="formData.name"
                        name="name"
                        required
                        [placeholder]="t().contact.form.namePlaceholder"
                        class="form-input" />
                    </div>

                    <!-- Email Input -->
                    <div>
                      <label for="contact-email" class="form-label">{{ t().contact.form.email }} *</label>
                      <input 
                        id="contact-email"
                        type="email" 
                        [(ngModel)]="formData.email"
                        name="email"
                        required
                        [placeholder]="t().contact.form.emailPlaceholder"
                        class="form-input" />
                    </div>
                  </div>

                  <!-- Subject Input -->
                  <div>
                    <label for="contact-subject" class="form-label">{{ t().contact.form.subject }} *</label>
                    <input 
                      id="contact-subject"
                      type="text" 
                      [(ngModel)]="formData.subject"
                      name="subject"
                      required
                      [placeholder]="t().contact.form.subjectPlaceholder"
                      class="form-input" />
                  </div>

                  <!-- Message Textarea -->
                  <div>
                    <label for="contact-message" class="form-label">{{ t().contact.form.message }} *</label>
                    <textarea 
                      id="contact-message"
                      [(ngModel)]="formData.message"
                      name="message"
                      rows="5"
                      required
                      [placeholder]="t().contact.form.messagePlaceholder"
                      class="form-input resize-y"></textarea>
                  </div>

                  <!-- Submit button -->
                  <div class="pt-2">
                    <button 
                      type="submit"
                      [disabled]="isSubmitting() || !isFormValid()"
                      class="btn btn-primary w-full sm:w-auto py-3 px-8 text-sm font-semibold shadow-[0_0_20px_rgba(14,165,233,0.35)] disabled:opacity-50">
                      @if (isSubmitting()) {
                        <app-icon name="activity" [size]="16"></app-icon>
                        <span>{{ t().contact.form.sending }}</span>
                      } @else {
                        <app-icon name="mail" [size]="16"></app-icon>
                        <span>{{ t().contact.form.submit }}</span>
                      }
                    </button>
                  </div>

                </form>
              }

            </div>
          </div>

        </div>

      </div>
    </section>
  `,
  styles: [`
    .form-label {
      display: block;
      font-size: 0.8rem;
      font-weight: 600;
      color: #94a3b8;
      margin-bottom: 0.35rem;
      font-family: var(--font-mono);
    }
    .form-input {
      width: 100%;
      padding: 0.75rem 1rem;
      border-radius: 0.5rem;
      background: rgba(15, 23, 42, 0.7);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #f8fafc;
      font-size: 0.9rem;
      font-family: inherit;
      outline: none;
      transition: all 0.2s ease;
    }
    .form-input:focus {
      border-color: rgba(56, 189, 248, 0.6);
      box-shadow: 0 0 15px rgba(56, 189, 248, 0.15);
      background: rgba(15, 23, 42, 0.9);
    }
    .form-input::placeholder {
      color: #475569;
    }
    .grid { display: grid; }
    .flex { display: flex; }
    .flex-col { flex-direction: column; }
    .items-center { align-items: center; }
    .justify-between { justify-content: space-between; }
    .gap-4 { gap: 1rem; }
    .gap-10 { gap: 2.5rem; }
  `]
})
export class ContactComponent {
  public readonly i18n = inject(I18nService);
  public readonly data = inject(PortfolioDataService);
  private readonly platformId = inject(PLATFORM_ID);

  public readonly t = this.i18n.t;
  public readonly emailCopied = signal<boolean>(false);
  public readonly isSubmitting = signal<boolean>(false);
  public readonly isSubmitted = signal<boolean>(false);

  public formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  public copyEmailToClipboard(): void {
    if (isPlatformBrowser(this.platformId)) {
      navigator.clipboard.writeText(this.data.personalInfo.email).then(() => {
        this.emailCopied.set(true);
        setTimeout(() => this.emailCopied.set(false), 2500);
      });
    }
  }

  public isFormValid(): boolean {
    return !!(
      this.formData.name.trim() &&
      this.formData.email.trim() &&
      this.formData.subject.trim() &&
      this.formData.message.trim()
    );
  }

  public submitForm(): void {
    if (!this.isFormValid() || this.isSubmitting()) return;

    this.isSubmitting.set(true);

    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
      // Construct mailto fallback
      if (isPlatformBrowser(this.platformId)) {
        const mailto = `mailto:${this.data.personalInfo.email}?subject=${encodeURIComponent(this.formData.subject)}&body=${encodeURIComponent('From: ' + this.formData.name + ' (' + this.formData.email + ')\n\n' + this.formData.message)}`;
        window.location.href = mailto;
      }
      this.formData = { name: '', email: '', subject: '', message: '' };
    }, 1200);
  }
}
