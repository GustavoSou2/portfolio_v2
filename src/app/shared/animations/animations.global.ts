import { animate, sequence, style, transition, trigger } from "@angular/animations";

export const topAnimation = trigger('topAnimation', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateY(15px)' }),
      animate('800ms {{delay}}ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
    ], { params: { delay: 0 } }),
  ])
  

  export const rightToLeftAnimation = trigger('rightToLeftAnimation', [
    transition(':enter', [
      style({ opacity: 0, transform: 'translateX(50vw)', width: '*' }),
      sequence([
        animate('700ms {{delay}}ms ease-in-out', style({ opacity: 1, transform: 'translateX(0)', width: '210px' })),
        animate('300ms {{delay}}ms ease-in-out', style({ opacity: 1, transform: 'translateX(0)', width: '*' })),
      ])
    ], { params: { delay: 0 } }),
  ])