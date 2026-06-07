import { Routes } from '@angular/router';
import { authGuard } from './auth.guard';
import { DashboardPageComponent } from './dashboard-page.component';
import { AppShellComponent } from './components/app-shell.component';
import { ForgotPasswordPageComponent } from './pages/forgot-password-page.component';
import { InterviewPrepPageComponent } from './pages/interview-prep-page.component';
import { LearningRoadmapPageComponent } from './pages/learning-roadmap-page.component';
import { LoginPageComponent } from './pages/login-page.component';
import { ProgressTrackerPageComponent } from './pages/progress-tracker-page.component';
import { ProjectsBuilderPageComponent } from './pages/projects-builder-page.component';
import { RegisterPageComponent } from './pages/register-page.component';
import { SettingsPageComponent } from './pages/settings-page.component';
import { SkillGapPageComponent } from './pages/skill-gap-page.component';
import { SkillMapPageComponent } from './pages/skill-map-page.component';

export const appRoutes: Routes = [
  { path: 'auth/login', component: LoginPageComponent },
  { path: 'auth/register', component: RegisterPageComponent },
  { path: 'auth/forgot-password', component: ForgotPasswordPageComponent },
  {
    path: '',
    component: AppShellComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardPageComponent },
      { path: 'skill-map', component: SkillMapPageComponent },
      { path: 'skill-gap', component: SkillGapPageComponent },
      { path: 'roadmap', component: LearningRoadmapPageComponent },
      { path: 'projects', component: ProjectsBuilderPageComponent },
      { path: 'interview', component: InterviewPrepPageComponent },
      { path: 'progress', component: ProgressTrackerPageComponent },
      { path: 'settings', component: SettingsPageComponent },
    ]
  },
  { path: '**', redirectTo: 'auth/login' }
];
