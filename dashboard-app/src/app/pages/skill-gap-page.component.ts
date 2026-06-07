import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MockDataService } from '../services/mock-data.service';

@Component({
  selector: 'app-skill-gap-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="space-y-6">
      <header>
        <p class="text-sm uppercase tracking-[0.35em] text-indigo-500">Skill Gap Analyzer</p>
        <h1 class="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">Compare your current profile against the market and prioritize the next skills to learn.</h1>
      </header>
      <div class="grid gap-6 xl:grid-cols-3">
        <article class="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/90" *ngFor="let gap of gaps">
          <p class="text-xs uppercase tracking-[0.3em] text-indigo-500">{{ gap.priority }} priority</p>
          <h2 class="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{{ gap.skill }}</h2>
          <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">{{ gap.reason }}</p>
          <p class="mt-4 rounded-2xl bg-emerald-50 p-3 text-sm text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200">Impact: {{ gap.impact }}</p>
        </article>
      </div>
    </section>
  `
})
export class SkillGapPageComponent {
  private readonly mock = inject(MockDataService);
  gaps = this.mock.getSkillGaps();
}
