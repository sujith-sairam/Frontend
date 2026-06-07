import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <main class="min-h-screen bg-[radial-gradient(circle_at_top,_#111827_0%,_#020617_45%,_#0f172a_100%)] text-slate-100">
      <div class="mx-auto flex min-h-screen max-w-5xl items-center px-6 py-10">
        <section class="w-full rounded-3xl border border-slate-800 bg-white/8 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur lg:p-8">
          <p class="text-sm uppercase tracking-[0.35em] text-indigo-300">Create account</p>
          <h1 class="mt-3 text-3xl font-semibold">Start your AI career growth journey</h1>
          <p class="mt-2 text-slate-300">Set your target role, map your gaps, and get your next learning sprint.</p>
          <form class="mt-6 grid gap-4 md:grid-cols-2">
            <input class="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3" placeholder="Full name" />
            <input class="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3" placeholder="Email" />
            <input class="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3" placeholder="Role target" />
            <input class="rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3" type="password" placeholder="Password" />
            <button type="button" class="md:col-span-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-500 to-cyan-400 px-4 py-3 text-sm font-semibold text-white">Create account</button>
          </form>
          <p class="mt-4 text-sm text-slate-300">Already have an account? <a routerLink="/auth/login" class="text-indigo-200">Sign in</a></p>
        </section>
      </div>
    </main>
  `
})
export class RegisterPageComponent {}
