import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { RouterModule, Routes } from '@angular/router';
import { TitleModule } from 'src/app/shared/components/title/title.module';
import { ProjectCardModule } from './components/project-card/project-card.module';
import { IconModule } from 'src/app/shared/components/icon/icon.module';


const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  }
]

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TitleModule,
    ProjectCardModule,
    IconModule
  ],
  exports: [ProjectsComponent]
})
export class ProjectsModule { }
