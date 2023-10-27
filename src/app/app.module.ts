import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AddEditBoardComponent } from '@components/boards/add-edit-board/add-edit-board.component';
import { AddEditTagComponent } from '@components/tags/add-edit-tag/add-edit-tag.component';
import { CardDetailComponent } from '@components/cards/card-detail/card-detail.component';
import { BrowseTagsComponent } from '@components/tags/browse-tags/browse-tags.component';
import { SettingsComponent } from '@components/settings/settings.component';
import { LoadingComponent } from '@components/ui/loading/loading.component';
import { NoDataComponent } from '@components/ui/no-data/no-data.component';
import { BoardComponent } from '@components/boards/board/board.component';
import { NavbarComponent } from '@components/ui/navbar/navbar.component';
import { ListComponent } from '@components/lists/list/list.component';
import { CardComponent } from '@components/cards/card/card.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    RouterModule.forRoot([]),
    AddEditBoardComponent,
    AddEditTagComponent,
    BrowseTagsComponent,
    CardDetailComponent,
    SettingsComponent,
    LoadingComponent,
    NoDataComponent,
    NavbarComponent,
    BoardComponent,
    BrowserModule,
    ListComponent,
    CardComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
