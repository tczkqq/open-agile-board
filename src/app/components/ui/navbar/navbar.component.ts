import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, OnInit, Type } from '@angular/core';

import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

import { map, tap } from 'rxjs/operators';

import { SettingsComponent } from '@components/settings/settings.component';
import { AboutComponent } from '@components/about/about.component';
import { BoardMngmtService } from '@services/board-mngmt.service';
import { AddEditBoardComponent } from '@components/boards/add-edit-board/add-edit-board.component';
import { AddEditTagComponent } from '@components/tags/add-edit-tag/add-edit-tag.component';
import { BrowseTagsComponent } from '@components/tags/browse-tags/browse-tags.component';

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
      label: 'Board',
      icon: PrimeIcons.CALENDAR,
      items: [
        { label: 'New', icon: PrimeIcons.PLUS, disabled: true },
        { label: 'Edit', icon: PrimeIcons.FILE_EDIT, disabled: true },
      ],
    },
    {
      label: 'Cards',
      icon: PrimeIcons.COMMENTS,
      items: [{ label: 'New', icon: PrimeIcons.PLUS, disabled: true }],
    },
    {
      label: 'Lists',
      icon: PrimeIcons.LIST,
      items: [{ label: 'New', icon: PrimeIcons.PLUS, disabled: true }],
    },
    {
      label: 'Tags',
      icon: PrimeIcons.TAGS,
      items: [
        {
          label: 'New',
          icon: PrimeIcons.PLUS,
          command: () => this.openDialog(AddEditTagComponent, 'Add Tag'),
        },
        {
          label: 'Browse',
          icon: PrimeIcons.BOOK,
          command: () => this.openDialog(BrowseTagsComponent, 'Browse Tags'),
        },
      ],
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
      command: () => this.openDialog(SettingsComponent, 'Settings'),
    },
    {
      label: 'About',
      icon: PrimeIcons.INFO_CIRCLE,
      command: () => this.openDialog(AboutComponent, 'About'),
    },
  ];

  constructor(
    private dialogService: DialogService,
    private boardMngmtService: BoardMngmtService,
  ) {}

  ngOnInit(): void {
    this.boardMngmtService
      .getBoards()
      .pipe(
        map((boards) =>
          boards.map((b) => ({
            id: b.id,
            label: b.title,
            icon: PrimeIcons.CALENDAR,
            command: () => this.boardMngmtService.setActiveBoard(b),
          })),
        ),
        tap(
          (boards) =>
            (this.menuItems[0].items = boards as unknown as MenuItem[]),
        ),
        tap(
          () =>
            this.menuItems[0].items?.push({
              label: 'New Board',
              icon: PrimeIcons.PLUS,
              command: () =>
                this.openDialog(AddEditBoardComponent, 'Add Board'),
            }),
        ),
      )
      .subscribe();

    this.boardMngmtService
      .getActiveBoard()
      .pipe(tap((board) => (this.menuItems[1].label = board.title)))
      .subscribe();
  }

  openDialog(component: Type<any>, header: string, data?: any): void {
    this.ref = this.dialogService.open(component, {
      header: header,
      data: data,
    });
  }
}
