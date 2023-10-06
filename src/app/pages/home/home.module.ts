import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { TypingAnimationModule } from 'src/app/components/typing-animation/typing-animation.module';

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
    TypingAnimationModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
