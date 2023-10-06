import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { BehaviorSubject } from 'rxjs';

export type StryleCustomType = {
  [klass: string]: any;
} | null | undefined

@Component({
  selector: 'typing-animation',
  template: `
    <div class="phrase" [@typingAnimation]="{ value: '', params: { delay: delay} }" [ngStyle]="styleCustom">{{ _typedText | async }}</div>
  `,
  styles: [``],
  animations: [
    trigger('typingAnimation', [
      transition('* => *', [
        style({ opacity: 0 }),
        animate('100ms {{delay}}ms ease-in-out', style({ opacity: 1 })),
      ], { params: { delay: 0 } }),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TypingAnimationComponent implements OnInit {
  @Input({ required: true }) phrase: string = '';

  @Input() styleCustom: StryleCustomType = {
    'font-size': '24px',
    'display': 'inline-block',
  };

  @Input() delay: number = 0;

  @Input() speed: number = 100;

  @Output() finishAnimation = new EventEmitter<boolean>(true);

  _typedText: BehaviorSubject<string> = new BehaviorSubject<string>('');


  constructor() {}
  ngOnInit(): void {
    setTimeout(() => {
    this.type();
    }, this.delay)

  }

  type() {
    for (let i = 0; i < this.phrase.length; i++) {
      setTimeout(() => {
        this._typedText.next(this._typedText.getValue() + this.phrase[i]);

        if (i === this.phrase.length - 1) {
          this.finishAnimation.emit(true);
        }
      }, i * this.speed);
    }
  }
}
