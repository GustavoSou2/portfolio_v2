import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, query, stagger,transition, style, animate, state, group } from '@angular/animations';
import { ThemeModeService } from 'src/app/shared/utils/services/theme-mode/theme-mode.service';

export const slideTo = trigger('slideTo', [
  transition('* => *', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        stagger(100, [
          animate('300ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);

export const menuTo =  trigger('fadeInOut', [
  state('void', style({ opacity: 0 })),
  state('*', style({ opacity: 1 })),
  transition('void <=> *', animate('300ms {{ delay }}ms ease-in'), { params: { delay: 0 } }),
])

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [slideTo, menuTo]
})
export class MenuComponent {

  set theme(bool: boolean) {
    this._theme = bool ? 'dark' : 'light';
  }

  get theme() {
    return this._theme === 'dark' ? true : false;
  }

  _theme: 'light' | 'dark' = 'dark';

  menuActivity: boolean = false;

  constructor(private router: Router, private themeModeService: ThemeModeService) {}

  link(path: string) {
    this.menuActivity = false;
    this.router.navigate([path]);
  }

  changeTheme() {
    this.themeModeService.setThemeMode(this._theme);
  }

}
