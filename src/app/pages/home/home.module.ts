import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { TypingAnimationModule } from 'src/app/shared/components/typing-animation/typing-animation.module';
import { IconModule } from 'src/app/shared/components/icon/icon.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TypingAnimationModule,
    IconModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
