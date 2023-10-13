import { Component, Input } from '@angular/core';
import { of } from 'rxjs';
import { projects } from './fake.db';
import { itemByItemAnimation } from 'src/app/shared/animations/animations.global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [itemByItemAnimation]

})
export class ProjectsComponent {
  
  
  projects$ = of(projects)
}
