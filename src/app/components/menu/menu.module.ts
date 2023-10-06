import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { IconModule } from '../icon/icon.module';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
