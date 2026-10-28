import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { I18nService } from '../../core/services/i18n.service';
import { PortfolioDataService } from '../../core/services/portfolio-data.service';
import { IconComponent } from '../../shared/components/icon/icon.component';
import { ApiEndpointSimulation } from '../../core/models/portfolio.model';

@Component({
  selector: 'app-architecture-demo',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <section id="architecture" class="section">
      <div class="container">
        
        <!-- Section Header -->
        <div class="section-header">
          <div class="section-eyebrow">
            <app-icon name="server" [size]="14"></app-icon>
            <span>{{ t().architecture.eyebrow }}</span>
          </div>
          <h2 class="section-title">{{ t().architecture.title }}</h2>
          <p class="section-subtitle">{{ t().architecture.subtitle }}</p>
        </div>

        <!-- Playground Container -->
        <div class="glass-card p-6 sm:p-8 border-cyan-500/20 shadow-2xl">
          
          <!-- Top Bar: Endpoint Selector & Dispatch Button -->
          <div class="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            
            <div class="flex flex-wrap items-center gap-2">
              <span class="text-xs font-mono text-slate-400 uppercase tracking-wider mr-1">
                {{ t().architecture.selectEndpoint }}
              </span>
              @for (sim of data.endpointSimulations; track sim.id) {
                <button 
                  type="button"
                  (click)="selectSimulation(sim)"
                  class="endpoint-btn"
                  [class.endpoint-btn-active]="selectedSim().id === sim.id">
                  <span 
                    class="font-mono text-xs font-bold px-1.5 py-0.5 rounded"
                    [class.bg-emerald-950]="sim.method === 'GET'"
                    [class.text-emerald-400]="sim.method === 'GET'"
                    [class.bg-sky-950]="sim.method === 'POST'"
                    [class.text-sky-400]="sim.method === 'POST'">
                    {{ sim.method }}
                  </span>
                  <span class="font-mono text-xs">{{ sim.path }}</span>
                </button>
              }
            </div>

            <!-- Dispatch Action -->
            <button 
              type="button"
              (click)="dispatchRequest()"
              [disabled]="isExecuting()"
              class="btn btn-primary whitespace-nowrap self-start lg:self-auto shadow-[0_0_20px_rgba(14,165,233,0.35)] disabled:opacity-50">
              <app-icon [name]="isExecuting() ? 'activity' : 'play'" [size]="16"></app-icon>
              <span>{{ isExecuting() ? 'Processing Pipeline...' : t().architecture.sendRequest }}</span>
            </button>

          </div>

          <!-- Description bar -->
          <div class="py-3 px-4 my-4 rounded-lg bg-slate-900/80 border border-slate-800 font-mono text-xs text-slate-300 flex items-center justify-between">
            <span class="text-slate-400">{{ selectedSim().description }}</span>
            <span class="text-cyan-400 shrink-0 font-semibold hidden sm:inline">HTTP/2 • TLS 1.3</span>
          </div>

          <!-- Simulation Grid: Pipeline steps on left, JSON on right -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
            
            <!-- Left: Execution Pipeline -->
            <div class="lg:col-span-6 flex flex-col gap-3">
              <div class="flex items-center justify-between pb-2">
                <h4 class="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <span>{{ t().architecture.stepByStep }}</span>
                </h4>
                <div class="flex items-center gap-2 font-mono text-xs">
                  <span class="text-slate-500">{{ t().architecture.statusLabel }}:</span>
                  <span 
                    class="font-bold px-2 py-0.5 rounded"
                    [class.bg-emerald-950]="lastStatusCode() === 200 || lastStatusCode() === 201 || lastStatusCode() === 202"
                    [class.text-emerald-400]="lastStatusCode() === 200 || lastStatusCode() === 201 || lastStatusCode() === 202">
                    {{ lastStatusCode() }} OK
                  </span>
                  <span class="text-slate-500 ml-2">{{ t().architecture.latencyLabel }}:</span>
                  <span class="text-cyan-400 font-semibold">{{ simulatedLatency() }}ms</span>
                </div>
              </div>

              <!-- Pipeline Step Nodes -->
              <div class="flex flex-col gap-2.5">
                @for (step of selectedSim().pipelineSteps; track step.name; let idx = $index) {
                  <div 
                    class="pipeline-node"
                    [class.pipeline-node-active]="isExecuting() && currentStepIndex() === idx"
                    [class.pipeline-node-done]="currentStepIndex() > idx || (!isExecuting() && hasExecuted())">
                    <div class="flex items-center justify-between mb-1">
                      <div class="flex items-center gap-2">
                        <span 
                          class="w-5 h-5 rounded-full flex items-center justify-center font-mono text-xs font-bold"
                          [class.bg-slate-800]="currentStepIndex() < idx"
                          [class.text-slate-400]="currentStepIndex() < idx"
                          [class.bg-cyan-500]="isExecuting() && currentStepIndex() === idx"
                          [class.text-white]="isExecuting() && currentStepIndex() === idx"
                          [class.bg-emerald-500]="currentStepIndex() > idx || (!isExecuting() && hasExecuted())"
                          [class.text-slate-950]="currentStepIndex() > idx || (!isExecuting() && hasExecuted())">
                          @if (currentStepIndex() > idx || (!isExecuting() && hasExecuted())) {
                            ✓
                          } @else {
                            {{ idx + 1 }}
                          }
                        </span>
                        <span class="font-bold text-sm text-white">{{ step.name }}</span>
                      </div>
                      <span class="font-mono text-xs text-slate-400">+{{ step.latencyMs }}ms</span>
                    </div>
                    <p class="text-xs text-slate-400 ml-7 leading-relaxed">
                      {{ step.description }}
                    </p>
                  </div>
                }
              </div>
            </div>

            <!-- Right: JSON Response Inspector -->
            <div class="lg:col-span-6 flex flex-col">
              <div class="flex items-center justify-between pb-2">
                <h4 class="font-mono text-xs uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>{{ t().architecture.responsePayload }}</span>
                </h4>
                <span class="font-mono text-xs text-slate-500">application/json</span>
              </div>

              <div class="json-inspector">
                <pre class="font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto"><code>{{ formattedJson() }}</code></pre>
              </div>

              <!-- Footer note -->
              <div class="mt-3 flex items-center justify-between text-xs font-mono text-slate-500 px-1">
                <span>Memory alloc: 1.2 KB</span>
                <span class="text-emerald-400">Connection Pool: Keep-Alive</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  `,
  styles: [`
    .endpoint-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.4rem 0.75rem;
      border-radius: 0.5rem;
      background: rgba(15, 23, 42, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: #94a3b8;
      transition: all 0.2s ease;
    }
    .endpoint-btn:hover {
      background: rgba(30, 41, 59, 0.8);
      border-color: rgba(56, 189, 248, 0.3);
      color: #f8fafc;
    }
    .endpoint-btn-active {
      background: rgba(56, 189, 248, 0.12);
      border-color: rgba(56, 189, 248, 0.45);
      color: #ffffff;
      box-shadow: 0 0 12px rgba(56, 189, 248, 0.1);
    }
    .pipeline-node {
      padding: 0.75rem 1rem;
      border-radius: 0.65rem;
      background: rgba(15, 23, 42, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.05);
      transition: all 0.2s ease;
    }
    .pipeline-node-active {
      background: rgba(56, 189, 248, 0.12);
      border-color: rgba(56, 189, 248, 0.4);
      box-shadow: 0 0 15px rgba(56, 189, 248, 0.15);
      transform: translateX(4px);
    }
    .pipeline-node-done {
      border-color: rgba(16, 185, 129, 0.25);
    }
    .json-inspector {
      flex: 1;
      min-height: 320px;
      max-height: 440px;
      padding: 1.25rem;
      background: #090d16;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 0.75rem;
      overflow-y: auto;
    }
    .grid { display: grid; }
    .flex { display: flex; }
    .flex-col { flex-direction: column; }
    .items-center { align-items: center; }
    .justify-between { justify-content: space-between; }
    .gap-4 { gap: 1rem; }
    .gap-6 { gap: 1.5rem; }
  `]
})
export class ArchitectureDemoComponent {
  public readonly i18n = inject(I18nService);
  public readonly data = inject(PortfolioDataService);
  public readonly t = this.i18n.t;

  public readonly selectedSim = signal<ApiEndpointSimulation>(this.data.endpointSimulations[0]);
  public readonly isExecuting = signal<boolean>(false);
  public readonly hasExecuted = signal<boolean>(true);
  public readonly currentStepIndex = signal<number>(5);
  public readonly simulatedLatency = signal<number>(14.8);
  public readonly lastStatusCode = signal<number>(201);

  public readonly formattedJson = computed(() => {
    return JSON.stringify(this.selectedSim().sampleResponse, null, 2);
  });

  public selectSimulation(sim: ApiEndpointSimulation): void {
    if (this.isExecuting()) return;
    this.selectedSim.set(sim);
    this.hasExecuted.set(true);
    this.currentStepIndex.set(sim.pipelineSteps.length);
    const code = sim.sampleResponse['statusCode'] || (sim.method === 'POST' ? 201 : 200);
    this.lastStatusCode.set(code);
    const totalLatency = sim.pipelineSteps.reduce((acc, s) => acc + s.latencyMs, 0) + (Math.random() * 2);
    this.simulatedLatency.set(parseFloat(totalLatency.toFixed(1)));
  }

  public dispatchRequest(): void {
    if (this.isExecuting()) return;

    this.isExecuting.set(true);
    this.hasExecuted.set(false);
    this.currentStepIndex.set(0);

    const steps = this.selectedSim().pipelineSteps;
    let current = 0;

    const interval = setInterval(() => {
      current++;
      this.currentStepIndex.set(current);

      if (current >= steps.length) {
        clearInterval(interval);
        this.isExecuting.set(false);
        this.hasExecuted.set(true);
        const code = this.selectedSim().sampleResponse['statusCode'] || (this.selectedSim().method === 'POST' ? 201 : 200);
        this.lastStatusCode.set(code);
        const total = steps.reduce((acc, s) => acc + s.latencyMs, 0) + (Math.random() * 2);
        this.simulatedLatency.set(parseFloat(total.toFixed(1)));
      }
    }, 280);
  }
}
