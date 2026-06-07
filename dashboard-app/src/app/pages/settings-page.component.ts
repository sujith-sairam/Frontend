import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-settings-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="space-y-6">
      <header>
        <p class="text-sm uppercase tracking-[0.35em] text-indigo-500">Settings</p>
        <h2 class="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">Manage preferences, account, and subscription</h2>
      </header>
      <div class="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
        <article class="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/90">
          <h3 class="text-xl font-semibold">Profile</h3>
          <div class="mt-4 grid gap-4 md:grid-cols-2"> <input class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900" placeholder="Full name" /> <input class="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-900" placeholder="Email" /> </div>
        </article>
        <article class="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/90">
          <h3 class="text-xl font-semibold">Notifications</h3>
          <ul class="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300"> <li>Daily digest</li> <li>Interview reminders</li> <li>Offer notifications</li> </ul>
        </article>
      </div>
      <article class="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950/90">
        <h3 class="text-xl font-semibold">Subscription</h3>
        <p class="mt-2 text-slate-600 dark:text-slate-300">Pro plan — unlimited AI-generated resumes and cover letters.</p>
      </article>
    </section>
  `
})
export class SettingsPageComponent {}
