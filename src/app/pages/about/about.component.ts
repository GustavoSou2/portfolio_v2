import { Component } from '@angular/core';
import { rightToLeftAnimation, topAnimation } from 'src/app/shared/animations/animations.global';


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
