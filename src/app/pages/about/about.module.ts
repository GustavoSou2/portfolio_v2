import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule, Routes } from '@angular/router';
import { TitleModule } from 'src/app/shared/components/title/title.module';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  }
]

@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TitleModule
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
