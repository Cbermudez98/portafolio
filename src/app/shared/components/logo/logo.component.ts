import { Component, input } from '@angular/core';

let nextId = 0;

/**
 * CB monogram: an open arc (the "C") wrapping two stacked server modules
 * (the two bowls of the "B"), with status LEDs that blink on hover.
 */
@Component({
  selector: 'app-logo',
  standalone: true,
  template: `
    <svg
      class="logo"
      [attr.width]="size()"
      [attr.height]="size()"
      viewBox="0 0 48 48"
      role="img"
      aria-label="Cesar Bermudez logo">
      <defs>
        <linearGradient [attr.id]="gradientId" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#5eead4" />
          <stop offset="1" stop-color="#3b82f6" />
        </linearGradient>
      </defs>

      <rect class="tile" x="1" y="1" width="46" height="46" rx="12" />

      <!-- C -->
      <path
        class="arc"
        d="M31.46 13.35 A13 13 0 1 0 31.46 34.65"
        fill="none"
        [attr.stroke]="'url(#' + gradientId + ')'"
        stroke-width="3.2"
        stroke-linecap="round" />

      <!-- B: two stacked server modules -->
      <g class="module top">
        <rect x="18.5" y="16" width="13" height="7" rx="2.4" />
        <circle class="led" cx="22.3" cy="19.5" r="1.35" />
        <line x1="25.6" y1="19.5" x2="28.6" y2="19.5" />
      </g>
      <g class="module bottom">
        <rect x="18.5" y="25" width="13" height="7" rx="2.4" />
        <circle class="led" cx="22.3" cy="28.5" r="1.35" />
        <line x1="25.6" y1="28.5" x2="28.6" y2="28.5" />
      </g>
    </svg>
  `,
  styles: [`
    :host { display: inline-flex; line-height: 0; }
    .tile {
      fill: rgba(94, 234, 212, 0.06);
      stroke: rgba(94, 234, 212, 0.28);
      stroke-width: 1;
      transition: fill 0.3s ease, stroke 0.3s ease;
    }
    .arc {
      stroke-dasharray: 70;
      stroke-dashoffset: 70;
      animation: draw 1.1s cubic-bezier(0.22, 1, 0.36, 1) 0.15s forwards;
    }
    .module rect {
      fill: rgba(94, 234, 212, 0.12);
      stroke: #5eead4;
      stroke-width: 1.6;
    }
    .module line {
      stroke: #5eead4;
      stroke-width: 1.6;
      stroke-linecap: round;
      opacity: 0.7;
    }
    .led { fill: #5eead4; }
    .module {
      /* backwards fill: once played, hover transforms take over */
      animation: slide-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) backwards;
      transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
    }
    .module.top { animation-delay: 0.55s; }
    .module.bottom { animation-delay: 0.7s; }

    /* hover (on the logo or on a parent link marked .brand) */
    :host(:hover) .tile,
    :host-context(.brand:hover) .tile {
      fill: rgba(94, 234, 212, 0.12);
      stroke: rgba(94, 234, 212, 0.6);
    }
    :host(:hover) .module.top,
    :host-context(.brand:hover) .module.top { transform: translateX(1.5px); }
    :host(:hover) .module.bottom,
    :host-context(.brand:hover) .module.bottom { transform: translateX(-1px); }
    :host(:hover) .led,
    :host-context(.brand:hover) .led { animation: blink 0.9s steps(2, jump-none) infinite; }
    :host(:hover) .bottom .led,
    :host-context(.brand:hover) .bottom .led { animation-delay: 0.45s; }

    @keyframes draw { to { stroke-dashoffset: 0; } }
    @keyframes slide-in {
      from { opacity: 0; transform: translateX(-6px); }
      to { opacity: 1; transform: none; }
    }
    @keyframes blink { 50% { opacity: 0.25; } }
    @media (prefers-reduced-motion: reduce) {
      .arc { animation: none; stroke-dashoffset: 0; }
      .module { animation: none; opacity: 1; }
    }
  `]
})
export class LogoComponent {
  public readonly size = input<number>(40);
  public readonly gradientId = `cb-logo-gradient-${nextId++}`;
}
