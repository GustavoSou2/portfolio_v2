import { Component, Input } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { projects } from './fake.db';
import { itemByItemAnimation, topAnimation } from 'src/app/shared/animations/animations.global';
import { ThemeModeService } from 'src/app/shared/utils/services/theme-mode/theme-mode.service';
import { Router } from '@angular/router';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [itemByItemAnimation, topAnimation]

})
export class ProjectsComponent {
  theme: 'light' | 'dark' = 'dark';
  projects$ = of(projects)

  _projectToDetail: BehaviorSubject<any> = new BehaviorSubject(null);

  get projectToDetail$() {
    return this._projectToDetail.asObservable();
  }

  set projectToDetail(project: any) {
    this._projectToDetail.next(project);
  }

  constructor(private themeModeService: ThemeModeService, private router: Router) {

    this.themeModeService.theme$.subscribe((theme) => {
      this.theme = theme;
    });
  }

  closeProjectToDetail() {
    const projectToDetailElement = document.getElementById('project-detail')
    projectToDetailElement?.classList.add('on-close');

    setTimeout(() => {
      projectToDetailElement?.classList.remove('on-close');
      this.projectToDetail = null;
    }, 200)
  }

  navigateTo(link: string) {
    window.open(link, '_blank');
  }
}
