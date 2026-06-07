import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MockDataService } from '../services/mock-data.service';

@Component({
  selector: 'app-interview-prep-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="space-y-6">
      <header>
        <p class="text-sm uppercase tracking-[0.35em] text-indigo-500">Interview Prep</p>
        <h1 class="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">Role-based prompts and mock interview sections to build confidence before the real conversation.</h1>
      </header>
      <div class="grid gap-6 xl:grid-cols-2">
        <article class="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/90" *ngFor="let item of questions">
          <p class="text-xs uppercase tracking-[0.3em] text-indigo-500">{{ item.level }}</p>
          <h2 class="mt-2 text-xl font-semibold text-slate-900 dark:text-white">{{ item.prompt }}</h2>
          <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">Focus: {{ item.focus }}</p>
        </article>
      </div>
    </section>
  `
})
export class InterviewPrepPageComponent {
  private readonly mock = inject(MockDataService);
  questions = this.mock.getInterviewQuestions();
}
