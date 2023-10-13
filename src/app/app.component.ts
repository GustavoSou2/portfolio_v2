import { Component, OnInit, Inject } from '@angular/core';
import { ThemeModeService } from './shared/utils/services/theme-mode/theme-mode.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private themeModeService: ThemeModeService, @Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.themeModeService.setThemeMode();
  }
}
