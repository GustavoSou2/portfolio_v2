import { Component } from '@angular/core';
import { trigger, transition, style, animate, sequence } from '@angular/animations';

const topAnimation = trigger('topAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(15px)' }),
    animate('800ms {{delay}}ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
  ], { params: { delay: 0 } }),
])

const rightToLeftAnimation = trigger('rightToLeftAnimation', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateX(50vw)', width: '*' }),
    sequence([
      animate('700ms {{delay}}ms ease-in-out', style({ opacity: 1, transform: 'translateX(0)', width: '210px' })),
      animate('300ms {{delay}}ms ease-in-out', style({ opacity: 1, transform: 'translateX(0)', width: '*' })),
    ])
  ], { params: { delay: 0 } }),
])

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
   animations: [
    topAnimation,
    rightToLeftAnimation
  ],
})
export class AboutComponent {

}
