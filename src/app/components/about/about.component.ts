import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  openGithub(): void {
    window.open('https://github.com/tczkqq/open-agile-board', '_blank');
  }
}
