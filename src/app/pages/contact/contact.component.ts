import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { itemByItemAnimation, rightToLeftAnimation, topAnimation } from 'src/app/shared/animations/animations.global';
import { ThemeModeService } from 'src/app/shared/utils/services/theme-mode/theme-mode.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [itemByItemAnimation, topAnimation]
})
export class ContactComponent {
  theme: 'dark' | 'light' = 'dark';
  contact!: FormGroup;

  constructor(private fb: FormBuilder, private themeModeService: ThemeModeService, private router: Router) {
    this.contact = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    })

    this.themeModeService.theme$.subscribe((theme) => {
      this.theme = theme;
    });
  }

  to(link: string) {
    window.open(link, '_blank');
  }
 

}
