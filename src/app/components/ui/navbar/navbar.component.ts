import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

import { map, tap } from 'rxjs/operators';

import { SettingsComponent } from '@components/settings/settings.component';
import { AboutComponent } from '@components/about/about.component';
import { BoardMngmtService } from '@services/board-mngmt.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [MenubarModule, DynamicDialogModule, BrowserAnimationsModule],
  providers: [DialogService],
})
export class NavbarComponent implements OnInit {
  ref!: DynamicDialogRef;

  menuItems: MenuItem[] = [
    {
      label: 'Open Agile Board',
      icon: PrimeIcons.HOME,
      items: [],
    },
    {
      label: 'Boards',
      icon: PrimeIcons.BOOK,
      items: [
        { label: 'New', icon: PrimeIcons.PLUS, disabled: true },
        { label: 'Edit', icon: PrimeIcons.FILE_EDIT, disabled: true },
      ],
    },
    {
      label: 'Cards',
      icon: PrimeIcons.COMMENT,
      items: [{ label: 'New Card', icon: PrimeIcons.PLUS, disabled: true }],
    },
    {
      label: 'Lists',
      icon: PrimeIcons.LIST,
      items: [{ label: 'New List', icon: PrimeIcons.PLUS, disabled: true }],
    },

    {
      label: 'Data',
      icon: PrimeIcons.DATABASE,
      items: [
        {
          label: 'From a file',
          icon: PrimeIcons.DOWNLOAD,
          disabled: true,
          items: [
            { label: 'Import', icon: PrimeIcons.UPLOAD },
            { label: 'Export', icon: PrimeIcons.DOWNLOAD },
          ],
        },
      ],
    },
    {
      label: 'Settings',
      icon: PrimeIcons.COG,
      command: () => this.onSettingsClick(),
    },
    {
      label: 'About',
      icon: PrimeIcons.INFO_CIRCLE,
      command: () => this.onAboutClick(),
    },
  ];

  constructor(
    private cdr: ChangeDetectorRef,
    private dialogService: DialogService,
    private boardMngmtService: BoardMngmtService
  ) {}

  ngOnInit(): void {
    this.boardMngmtService
      .getBoards()
      .pipe(
        map((boards) =>
          boards.map((b) => ({
            id: b.id,
            label: b.title,
            command: () => this.boardMngmtService.setActiveBoard(b),
          }))
        ),
        tap(
          (boards) =>
            (this.menuItems[0].items = boards as unknown as MenuItem[])
        )
      )
      .subscribe();

    this.boardMngmtService
      .getActiveBoard()
      .pipe(tap((board) => (this.menuItems[1].label = board.title)))
      .subscribe();
  }

  onSettingsClick(): void {
    this.ref = this.dialogService.open(SettingsComponent, {
      header: 'Settings',
    });
  }

  onAboutClick(): void {
    this.ref = this.dialogService.open(AboutComponent, {
      header: 'About',
    });
  }
}
