import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeModeService {
  isDarkMode() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  
  constructor() { }

  setThemeMode(theme: 'light' | 'dark' = this.isDarkMode() ? 'dark' : 'light') {
    const isDarkMode = theme;

    console.log(theme)
    if (isDarkMode === 'dark') {
      window.document.documentElement.style.setProperty('--basic', '#2f3542');
      window.document.documentElement.style.setProperty('--secondary', '#ced6e0');
    } else {
      window.document.documentElement.style.setProperty('--basic', '#f1f2f6');
      window.document.documentElement.style.setProperty('--secondary', '#2f3542');
    }
  }
}
