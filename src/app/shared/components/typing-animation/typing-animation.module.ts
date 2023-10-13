import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypingAnimationComponent } from './typing-animation.component';


@NgModule({
  declarations: [
    TypingAnimationComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [TypingAnimationComponent]
})
export class TypingAnimationModule { }
