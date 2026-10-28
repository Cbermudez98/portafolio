import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

const LOGO_FALLBACKS: Record<string, { initials: string; bg: string; fg: string }> = {
  globant: { initials: 'GL', bg: '#1a1a1a', fg: '#c5d433' },
  pragma: { initials: 'PR', bg: '#5b2d8e', fg: '#ffffff' },
  unicolombo: { initials: 'UC', bg: '#003366', fg: '#e2e8f0' },
  godigital: { initials: 'GD', bg: '#0f766e', fg: '#e2e8f0' },
  simbiotica: { initials: 'SB', bg: '#1e40af', fg: '#e2e8f0' },
  freelancer: { initials: 'FL', bg: '#29b2fe', fg: '#ffffff' },
  platzi: { initials: 'PZ', bg: '#98ca3f', fg: '#121f3d' },
  sena: { initials: 'SE', bg: '#39a900', fg: '#ffffff' },
  colombo: { initials: 'CA', bg: '#002868', fg: '#ffffff' },
  university: { initials: 'UN', bg: '#134e4a', fg: '#e2e8f0' },
  aci: { initials: 'AC', bg: '#7fe8b0', fg: '#0d3b2a' },
  io: { initials: 'IO', bg: '#000000', fg: '#ffffff' },
  autotest: { initials: 'AT', bg: '#134e4a', fg: '#e2e8f0' },
  sabana: { initials: 'US', bg: '#00205b', fg: '#ffffff' },
  aws: { initials: 'AWS', bg: '#232f3e', fg: '#ff9900' },
  udemy: { initials: 'U', bg: '#a435f0', fg: '#ffffff' },
  algoexpert: { initials: 'AE', bg: '#1d3557', fg: '#ffffff' },
  refactoring: { initials: 'RG', bg: '#d94b3d', fg: '#ffffff' },
  efset: { initials: 'EF', bg: '#0f4c81', fg: '#ffffff' },
  default: { initials: 'CO', bg: '#1e293b', fg: '#5eead4' }
};

@Component({
  selector: 'app-company-logo',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="logo" [style.width.px]="size()" [style.height.px]="size()" [attr.aria-label]="label()">
      @if (logoUrl() && !failed()) {
        <img
          [src]="encodedUrl()"
          [alt]="label()"
          (error)="failed.set(true)"
          loading="lazy"
          decoding="async" />
      } @else {
        <span
          class="fallback"
          [style.background]="fallback().bg"
          [style.color]="fallback().fg"
          [style.fontSize.px]="Math.round(size() * 0.32)">
          {{ fallback().initials }}
        </span>
      }
    </div>
  `,
  styles: [`
    .logo {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.35rem;
      overflow: hidden;
      flex-shrink: 0;
      background: rgba(226, 232, 240, 0.06);
      border: 1px solid rgba(226, 232, 240, 0.12);
      transition: transform 0.35s var(--ease-out), box-shadow 0.35s var(--ease-out);
    }
    :host(:hover) .logo {
      transform: translateY(-2px) rotate(-2deg);
      box-shadow: 0 8px 22px rgba(2, 6, 23, 0.45);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      background: #ffffff;
    }
    .fallback {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: var(--font-sans);
      font-weight: 700;
      letter-spacing: 0.02em;
    }
  `]
})
export class CompanyLogoComponent {
  public readonly logoKey = input<string>('default');
  public readonly logoUrl = input<string | undefined>(undefined);
  public readonly label = input<string>('Company');
  public readonly size = input<number>(48);
  public readonly failed = signal(false);
  public readonly Math = Math;

  public encodedUrl(): string {
    return encodeURI(this.logoUrl() ?? '');
  }

  public fallback() {
    return LOGO_FALLBACKS[this.logoKey()] ?? LOGO_FALLBACKS['default'];
  }
}
