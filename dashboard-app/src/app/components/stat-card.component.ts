import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-950/90">
      <div class="flex items-start justify-between">
        <div>
          <p class="text-sm text-slate-500 dark:text-slate-400">{{ label }}</p>
          <p class="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">{{ value }}</p>
        </div>
        <span class="rounded-2xl bg-slate-100 p-3 text-xl dark:bg-slate-900">{{ icon }}</span>
      </div>
      <p class="mt-4 text-sm text-emerald-600 dark:text-emerald-300">{{ delta }}</p>
    </article>
  `
})
export class StatCardComponent {
  @Input() label = '';
  @Input() value = '';
  @Input() delta = '';
  @Input() icon = '•';
}
