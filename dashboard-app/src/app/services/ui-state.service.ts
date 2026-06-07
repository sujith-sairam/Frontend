import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UiStateService {
  readonly isDarkMode = signal(false);
  readonly isSidebarOpen = signal(true);

  toggleTheme() {
    this.isDarkMode.set(!this.isDarkMode());
    document.documentElement.classList.toggle('dark', this.isDarkMode());
  }

  toggleSidebar() {
    this.isSidebarOpen.set(!this.isSidebarOpen());
  }
}
