import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component, OnInit, Type } from '@angular/core';

import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { InputTextModule } from 'primeng/inputtext';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';

import { map, tap } from 'rxjs/operators';

import { AddEditBoardComponent } from '@components/boards/add-edit-board/add-edit-board.component';
import { AddEditCardComponent } from '@components/cards/add-edit-card/add-edit-card.component';
import { AddEditListComponent } from '@components/lists/add-edit-list/add-edit-list.component';
import { AddEditTagComponent } from '@components/tags/add-edit-tag/add-edit-tag.component';
import { BrowseTagsComponent } from '@components/tags/browse-tags/browse-tags.component';
import { SearchBarComponent } from '@components/ui/search-bar/search-bar.component';
import { SettingsComponent } from '@components/settings/settings.component';
import { AboutComponent } from '@components/about/about.component';
import { BoardMngmtService } from '@services/board-mngmt.service';
import { LoginComponent } from '@components/auth/login/login.component';
import { RegisterComponent } from '@components/auth/register/register.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    BrowserAnimationsModule,
    DynamicDialogModule,
    SearchBarComponent,
    InputTextModule,
    MenubarModule,
  ],
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
        {
          label: 'Settings',
          icon: PrimeIcons.WRENCH,
          command: () =>
            this.openDialog(AddEditBoardComponent, { header: 'Edit Board' }),
        },
      ],
    },
    {
      label: 'Cards',
      icon: PrimeIcons.COMMENTS,
      items: [
        {
          label: 'New',
          icon: PrimeIcons.PLUS,
          command: () =>
            this.openDialog(AddEditCardComponent, { header: 'Add Card' }),
        },
      ],
    },
    {
      label: 'Lists',
      icon: PrimeIcons.LIST,
      items: [
        {
          label: 'New',
          icon: PrimeIcons.PLUS,
          command: () =>
            this.openDialog(AddEditListComponent, { header: 'Add List' }),
        },
      ],
    },
    {
      label: 'Tags',
      icon: PrimeIcons.TAGS,
      items: [
        {
          label: 'New',
          icon: PrimeIcons.PLUS,
          command: () =>
            this.openDialog(AddEditTagComponent, { header: 'Add Tag' }),
        },
        {
          label: 'Browse',
          icon: PrimeIcons.BOOK,
          command: () =>
            this.openDialog(BrowseTagsComponent, { header: 'Browse Tags' }),
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
        {
          label: 'Generate chart',
          icon: PrimeIcons.CHART_PIE,
          disabled: true,
        },
      ],
    },
    {
      label: 'Tools',
      icon: PrimeIcons.WRENCH,
      disabled: true,
    },
    {
      label: 'Settings',
      icon: PrimeIcons.COG,
      command: () => this.openDialog(SettingsComponent, { header: 'Settings' }),
    },
    {
      label: 'About',
      icon: PrimeIcons.INFO_CIRCLE,
      command: () => this.openDialog(AboutComponent, { header: 'About' }),
    },
    {
      label: 'Account',
      icon: PrimeIcons.USER,
      items: [
        {
          label: 'Sign in',
          icon: PrimeIcons.SIGN_IN,
          command: () =>
            this.openDialog(LoginComponent, {
              header: 'Sign in',
              width: '25em',
            }),
        },
        {
          label: 'Sign up',
          icon: PrimeIcons.USER_PLUS,
          command: () =>
            this.openDialog(RegisterComponent, {
              header: 'Sign up',
              width: '25em',
            }),
        },
        {
          label: 'Sign out',
          icon: PrimeIcons.SIGN_OUT,
          command: () => this.onLogout(),
        },
      ],
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
                this.openDialog(AddEditBoardComponent, { header: 'Add Board' }),
            }),
        ),
      )
      .subscribe();

    this.boardMngmtService
      .getActiveBoard()
      .pipe(tap((board) => (this.menuItems[1].label = board.title)))
      .subscribe();
  }

  openDialog(component: Type<any>, config: DynamicDialogConfig<any>): void {
    this.ref = this.dialogService.open(component, config);
  }

  onLogout(): void {}
}
