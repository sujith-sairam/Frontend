import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MockDataService } from '../services/mock-data.service';

@Component({
  selector: 'app-projects-builder-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="space-y-6">
      <header>
        <p class="text-sm uppercase tracking-[0.35em] text-indigo-500">Projects Builder</p>
        <h1 class="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">Portfolio-ready projects built around the skills your target role demands.</h1>
      </header>
      <div class="grid gap-6 xl:grid-cols-3">
        <article class="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/90" *ngFor="let project of projects">
          <p class="text-xs uppercase tracking-[0.3em] text-indigo-500">{{ project.difficulty }}</p>
          <h2 class="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{{ project.title }}</h2>
          <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">{{ project.outcome }}</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span class="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-900 dark:text-slate-200" *ngFor="let skill of project.skills">{{ skill }}</span>
          </div>
        </article>
      </div>
    </section>
  `
})
export class ProjectsBuilderPageComponent {
  private readonly mock = inject(MockDataService);
  projects = this.mock.getProjects();
}
