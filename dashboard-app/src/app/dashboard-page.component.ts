import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { StatCardComponent } from './components/stat-card.component';
import { MockDataService } from './services/mock-data.service';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule, StatCardComponent],
  template: `
    <main class="min-h-screen bg-[radial-gradient(circle_at_top,_#eef2ff_0%,_#f8fafc_30%,_#eff6ff_100%)] text-slate-900 dark:bg-[radial-gradient(circle_at_top,_#111827_0%,_#020617_35%,_#0f172a_100%)] dark:text-slate-100">
      <div class="mx-auto max-w-7xl p-6 lg:p-8">
        <section class="space-y-8">
          <header class="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
            <div class="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
              <div>
                <p class="text-sm uppercase tracking-[0.35em] text-indigo-500">Career Overview</p>
                <h1 class="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">Your AI career coach for the next 8 weeks of skill growth.</h1>
                <p class="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">Track your current strengths, see the skills the market demands, and get the next best action to move from good to ready.</p>
              </div>
              <div class="rounded-3xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-500/10 dark:text-emerald-200">Readiness score: 78/100</div>
            </div>
          </header>

          <section class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <app-stat-card label="Readiness score" [value]="'78%'" delta="▲ +9 points this month" icon="🎯"></app-stat-card>
            <app-stat-card label="Skill gaps" [value]="'3 priority areas'" delta="Focus on system design, AI fluency, and testing" icon="🧭"></app-stat-card>
            <app-stat-card label="Learning hours" [value]="'18 hrs'" delta="Weekly plan is on track" icon="⏱️"></app-stat-card>
            <app-stat-card label="Target role" [value]="'Senior Product Engineer'" delta="Goal: 24 LPA in 8 weeks" icon="🚀"></app-stat-card>
          </section>

          <section class="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
            <article class="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/90">
              <p class="text-sm uppercase tracking-[0.35em] text-indigo-500">Current profile</p>
              <h2 class="mt-2 text-xl font-semibold text-slate-900 dark:text-white">You are building toward a high-demand product engineering path.</h2>
              <div class="mt-5 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
                <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">Current role: {{ profile.currentRole }}</div>
                <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">Experience level: {{ profile.experienceLevel }}</div>
                <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">Top strengths: {{ profile.currentSkills.join(', ') }}</div>
              </div>
            </article>

            <article class="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/90">
              <p class="text-sm uppercase tracking-[0.35em] text-indigo-500">Next best action</p>
              <h2 class="mt-2 text-xl font-semibold text-slate-900 dark:text-white">Start with system design practice.</h2>
              <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">Your next milestone is to complete one architecture walkthrough and one AI product case study before moving into interview prep.</p>
              <button class="mt-5 rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20">Open roadmap</button>
            </article>
          </section>

          <section class="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
            <article class="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/90">
              <p class="text-sm uppercase tracking-[0.35em] text-indigo-500">Skill momentum</p>
              <h2 class="mt-2 text-xl font-semibold text-slate-900 dark:text-white">Highest-demand skills in your target market</h2>
              <div class="mt-5 space-y-3">
                <div *ngFor="let item of marketSkills" class="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900">
                  <div class="flex items-center justify-between text-sm text-slate-700 dark:text-slate-200"><strong>{{ item.name }}</strong><span>{{ item.demand }}</span></div>
                  <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">{{ item.trend }}</p>
                </div>
              </div>
            </article>

            <article class="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/90">
              <p class="text-sm uppercase tracking-[0.35em] text-indigo-500">Coach note</p>
              <h2 class="mt-2 text-xl font-semibold text-slate-900 dark:text-white">Why this matters</h2>
              <p class="mt-4 text-sm text-slate-600 dark:text-slate-300">This system focuses on market-relevant skills, clear learning priorities, and interview readiness rather than job listings or application pipelines.</p>
              <div class="mt-5 rounded-3xl bg-gradient-to-br from-indigo-500 via-sky-500 to-cyan-400 p-5 text-white shadow-lg shadow-indigo-500/20">
                <p class="text-sm uppercase tracking-[0.35em] text-indigo-100">Focus</p>
                <p class="mt-2 text-xl font-semibold">Learn what matters next, build proof, and prepare with confidence.</p>
              </div>
            </article>
          </section>
        </section>
      </div>
    </main>
  `
})
export class DashboardPageComponent {
  private readonly mock = inject(MockDataService);
  profile = this.mock.getProfile();
  marketSkills = this.mock.getMarketSkills();
}
