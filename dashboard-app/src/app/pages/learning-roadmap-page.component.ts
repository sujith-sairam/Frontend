import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MockDataService } from '../services/mock-data.service';

@Component({
  selector: 'app-learning-roadmap-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="space-y-6">
      <header>
        <p class="text-sm uppercase tracking-[0.35em] text-indigo-500">Learning Roadmap</p>
        <h1 class="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">A week-by-week plan to move from current skill to target role readiness.</h1>
      </header>
      <div class="space-y-4">
        <article class="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/90" *ngFor="let task of roadmap">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p class="text-xs uppercase tracking-[0.3em] text-indigo-500">{{ task.week }}</p>
              <h2 class="mt-1 text-xl font-semibold text-slate-900 dark:text-white">{{ task.focus }}</h2>
            </div>
            <span class="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-200">{{ task.hours }}</span>
          </div>
          <ul class="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li class="rounded-2xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900" *ngFor="let item of task.tasks">{{ item }}</li>
          </ul>
        </article>
      </div>
    </section>
  `
})
export class LearningRoadmapPageComponent {
  private readonly mock = inject(MockDataService);
  roadmap = this.mock.getLearningRoadmap();
}
