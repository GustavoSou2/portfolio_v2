import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeModeService {
  _theme: BehaviorSubject<'light' | 'dark'> = new BehaviorSubject<'light' | 'dark'>('dark');

  set theme(theme: 'light' | 'dark') {
    this._theme.next(theme);
  }

  get theme() {
    return this._theme.getValue();
  }

  get theme$() {
    return this._theme.asObservable();
  }

  isDarkMode() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  
  constructor() { }

  setThemeMode(theme: 'light' | 'dark' = this.isDarkMode() ? 'dark' : 'light') {
    const isDarkMode = theme;

    this.theme = theme;

    if (isDarkMode === 'dark') {
      window.document.documentElement.style.setProperty('--basic', '#2f3542');
      window.document.documentElement.style.setProperty('--secondary', '#ced6e0');
    } else {
      window.document.documentElement.style.setProperty('--basic', '#f1f2f6');
      window.document.documentElement.style.setProperty('--secondary', '#2f3542');
    }
  }
}
