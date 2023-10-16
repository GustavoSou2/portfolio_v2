import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { InputModule } from './components/input/input.module';
import { TitleModule } from 'src/app/shared/components/title/title.module';
import { IconModule } from 'src/app/shared/components/icon/icon.module';

const routes: Routes = [
  {
    path: '',
    component: ContactComponent
  }
]

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    InputModule,
    TitleModule,
    IconModule
  ], 
  exports: [ContactComponent]
})
export class ContactModule { }
