import { Component, Input } from '@angular/core';

export type IconSizeType = 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  @Input({ required: true }) fontAwesome!: string;
  
  @Input() size: IconSizeType = 'md';

  @Input() theme: 'light' | 'dark' = 'light';
}
