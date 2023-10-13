import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from './project-card.component';
import { CharacterLimitPipe } from 'src/app/shared/utils/pipes/character-limit/character-limit.pipe';



@NgModule({
  declarations: [
    ProjectCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProjectCardComponent
  ]
})
export class ProjectCardModule { }
