import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

const yourWelcomeCustom = {
  'font-size': '2.4rem', 
  'color': '#ccf381', 
  'text-shadow': 'rgb(87, 95, 207) -3px 4px 0px, rgb(87, 95, 207) -1px 1px 0px, rgb(87, 95, 207) 1px -1px 0px, rgb(87, 95, 207) 1px 0px 0px' ,
  'font-family': "'Montserrat', sans-serif", 
  'font-weight': 'bold',
}

const nameStyleCustom = {
  'font-size': '4.5rem',
  'font-weight': '700',
  'text-transform': 'uppercase',
  'font-family': "'Inter', sans-serif", 
  'background': 'linear-gradient(45deg, #5758BB, #4b7bec, #2196f3)', 
  'color': 'transparent', 
  'background-clip': 'text',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent' 
}

const descriptionStyleCustom = {
  'font-size': '1.2rem',
  'font-family': "'Raleway', sans-serif", 
  'color': 'var(--secondary)',
  'margin': '0 24px'
}

const buttonAnimation = trigger('buttonAnimation', [
  state('false', style({
    opacity: 0,
    transform: 'translateY(20px)'
  })),
  state('true', style({
    opacity: 1,
    transform: 'translateY(0)'
  })),
  transition('false => true', animate('500ms ease-in')),
])

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [buttonAnimation]
})
export class HomeComponent {
  nameStyleCustom = nameStyleCustom;
  descriptionStyleCustom = descriptionStyleCustom;
  yourWelcomeCustom = yourWelcomeCustom;

  showButton: boolean = false;

  constructor(private router: Router) {}

  to(link: string) {
    this.router.navigate([link]);
  }
}
