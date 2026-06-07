import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MockDataService } from '../services/mock-data.service';

@Component({
  selector: 'app-skill-map-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="space-y-6">
      <header>
        <p class="text-sm uppercase tracking-[0.35em] text-indigo-500">Skill Map</p>
        <h1 class="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">Structured view of current skills vs. target market demand.</h1>
      </header>
      <div class="grid gap-6 xl:grid-cols-2">
        <article class="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/90" *ngFor="let skill of skills">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm text-slate-500 dark:text-slate-400">{{ skill.category }}</p>
              <h2 class="mt-1 text-xl font-semibold text-slate-900 dark:text-white">{{ skill.name }}</h2>
            </div>
            <span class="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-200">{{ skill.level }}</span>
          </div>
          <div class="mt-4 h-2 rounded-full bg-slate-100 dark:bg-slate-800">
            <div class="h-2 rounded-full bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400" [style.width.%]="skill.confidence"></div>
          </div>
          <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">Confidence level: {{ skill.confidence }}%</p>
        </article>
      </div>
    </section>
  `
})
export class SkillMapPageComponent {
  private readonly mock = inject(MockDataService);
  skills = this.mock.getSkills();
}
