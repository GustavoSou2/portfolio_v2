import { Component, Input } from '@angular/core';
import { of } from 'rxjs';
import { projects } from './fake.db';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  
  
  projects$ = of(projects)
}
