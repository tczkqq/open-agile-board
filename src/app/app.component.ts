import { Component, OnInit } from '@angular/core';

import { ColorSchemeService } from './services/color-scheme.service';
import { BoardMngmtService } from '@services/board-mngmt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'open-agile-board';

  constructor(
    private colorSchemeService: ColorSchemeService,
    public boardMngmtService: BoardMngmtService
  ) {}

  ngOnInit(): void {
    this.colorSchemeService.initialize();
  }
}
