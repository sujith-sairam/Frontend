import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UiStateService } from '../services/ui-state.service';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
      <div class="mx-auto flex max-w-7xl gap-6 p-4 lg:p-6">
        <aside class="hidden shrink-0 lg:block lg:w-72">
          <div class="sticky top-6 rounded-3xl border border-slate-200/80 bg-white/85 p-5 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
            <div class="flex items-center gap-3 border-b border-slate-200 pb-5 dark:border-slate-800">
              <div class="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 text-lg font-semibold text-white">SC</div>
              <div>
                <p class="text-[11px] uppercase tracking-[0.35em] text-indigo-500">SkillCoach AI</p>
                <h2 class="text-xl font-semibold">Career Growth OS</h2>
              </div>
            </div>
            <nav class="mt-5 space-y-1 text-sm font-medium text-slate-600 dark:text-slate-300">
              <a *ngFor="let item of navItems" [routerLink]="item.path" routerLinkActive="bg-indigo-500/10 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-100" [routerLinkActiveOptions]="{ exact: item.exact }" class="flex items-center justify-between rounded-2xl px-4 py-3 transition hover:bg-slate-100 dark:hover:bg-slate-900">
                <span class="flex items-center gap-3"><span>{{ item.icon }}</span>{{ item.label }}</span>
                <span *ngIf="item.badge" class="rounded-full bg-emerald-500/10 px-2 py-1 text-[11px] text-emerald-600 dark:text-emerald-300">{{ item.badge }}</span>
              </a>
            </nav>
          </div>
        </aside>

        <div class="flex-1 space-y-6">
          <header class="rounded-3xl border border-slate-200/80 bg-white/85 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/85">
            <div class="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p class="text-[11px] uppercase tracking-[0.35em] text-indigo-500">AI Career Skill Growth System</p>
                <h1 class="text-2xl font-semibold text-slate-900 dark:text-white">SkillCoach AI</h1>
              </div>
              <div class="flex items-center gap-3">
                <button class="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">Plan next sprint</button>
                <button (click)="ui.toggleTheme()" class="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">{{ ui.isDarkMode() ? '🌙 Dark' : '☀️ Light' }}</button>
                <a routerLink="/auth/login" class="rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20">Sign out</a>
              </div>
            </div>
          </header>

          <main class="rounded-3xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/80 lg:p-6">
            <router-outlet></router-outlet>
          </main>
        </div>
      </div>
    </div>
  `
})
export class AppShellComponent {
  ui = inject(UiStateService);
  navItems: Array<{ label: string; path: string; icon: string; exact: boolean; badge?: string }> = [
    { label: 'Career Overview', path: '/dashboard', icon: '📊', exact: true },
    { label: 'Skill Map', path: '/skill-map', icon: '🧭', exact: false },
    { label: 'Skill Gap Analyzer', path: '/skill-gap', icon: '🔍', exact: false },
    { label: 'Learning Roadmap', path: '/roadmap', icon: '🗺️', exact: false },
    { label: 'Projects Builder', path: '/projects', icon: '🛠️', exact: false },
    { label: 'Interview Prep', path: '/interview', icon: '🎙️', exact: false },
    { label: 'Progress Tracker', path: '/progress', icon: '📈', exact: false },
    { label: 'Settings', path: '/settings', icon: '⚙️', exact: false },
  ];
}
