import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <main class="min-h-screen bg-[radial-gradient(circle_at_top,_#111827_0%,_#020617_45%,_#0f172a_100%)] text-slate-100">
      <div class="mx-auto grid min-h-screen max-w-6xl items-center gap-10 px-6 py-10 lg:grid-cols-[1fr_0.9fr]">
        <section>
          <p class="text-sm uppercase tracking-[0.35em] text-indigo-300">SkillCoach AI</p>
          <h1 class="mt-4 text-4xl font-semibold lg:text-5xl">Grow your career with a personal AI skill coach.</h1>
          <p class="mt-4 max-w-xl text-slate-300">Identify skill gaps, build learning roadmaps, and practice for interviews with clarity and momentum.</p>
          <div class="mt-8 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 shadow-2xl shadow-indigo-950/30">
            <p class="text-sm text-slate-300">Highlights</p>
            <ul class="mt-4 space-y-3 text-sm text-slate-200">
              <li>• Career goal and skill gap analysis</li>
              <li>• Personalized learning roadmaps</li>
              <li>• Interview practice and progress tracking</li>
            </ul>
          </div>
        </section>
        <section class="rounded-3xl border border-slate-800 bg-white/8 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur">
          <h2 class="text-2xl font-semibold">Welcome back</h2>
          <p class="mt-2 text-slate-300">Sign in to continue your journey.</p>
          <form class="mt-6 space-y-4">
            <input class="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 placeholder:text-slate-400" placeholder="Email address" />
            <input class="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 placeholder:text-slate-400" type="password" placeholder="Password" />
            <button type="button" class="w-full rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-4 py-3 text-sm font-semibold text-white">Sign in</button>
          </form>
          <div class="mt-4 flex items-center justify-between text-sm text-slate-300">
            <a routerLink="/auth/forgot-password" class="hover:text-white">Forgot password?</a>
            <a routerLink="/auth/register" class="text-indigo-200 hover:text-white">Create account</a>
          </div>
        </section>
      </div>
    </main>
  `
})
export class LoginPageComponent {}
