import { Component, Input } from '@angular/core';
import { topAnimation } from '../../animations/animations.global';
import { StyleCustomType } from '../../utils/types/style-custom.type';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  animations: [topAnimation]
})
export class TitleComponent {
  @Input({ required: true }) title: string = '';

  @Input() set fontSize(size: string) {
    this._size = {
      'font-size': size,
    };
  };

  _size: StyleCustomType = {
    'font-size': '24px',
  }

  @Input() delay: number = 0;
}
