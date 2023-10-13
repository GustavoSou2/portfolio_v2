import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, query, stagger,transition, style, animate, state, group } from '@angular/animations';

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

export const menuTo = trigger('menuTo', [
  state('enter', style({ opacity: 1 })),
  state('leave', style({ opacity: 0 })),
  transition('enter => leave', group([ style({ opacity: 0 }) ,animate('400ms ease-in-out')])),
  transition('leave => enter', animate('400ms ease-in-out')),
]);

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [slideTo, menuTo]
})
export class MenuComponent {
  menuActivity: boolean = false;

  constructor(private router: Router) {}

  link(path: string) {
    this.menuActivity = false;
    this.router.navigate([path]);
  }

}
