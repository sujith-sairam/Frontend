import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MockDataService } from '../services/mock-data.service';

@Component({
  selector: 'app-progress-tracker-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="space-y-6">
      <header>
        <p class="text-sm uppercase tracking-[0.35em] text-indigo-500">Progress Tracker</p>
        <h1 class="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">Measure growth across skills, milestones, and readiness over time.</h1>
      </header>
      <div class="grid gap-6 xl:grid-cols-2">
        <article class="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/90" *ngFor="let skill of skills">
          <div class="flex items-center justify-between">
            <h2 class="text-xl font-semibold text-slate-900 dark:text-white">{{ skill.name }}</h2>
            <span class="text-sm text-emerald-600 dark:text-emerald-300">{{ skill.confidence }}%</span>
          </div>
          <div class="mt-4 h-2 rounded-full bg-slate-100 dark:bg-slate-800">
            <div class="h-2 rounded-full bg-gradient-to-r from-emerald-400 via-green-400 to-lime-400" [style.width.%]="skill.confidence"></div>
          </div>
          <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">Level: {{ skill.level }}</p>
        </article>
      </div>
    </section>
  `
})
export class ProgressTrackerPageComponent {
  private readonly mock = inject(MockDataService);
  skills = this.mock.getSkills();
}
