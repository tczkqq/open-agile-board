import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { CardDetailComponent } from '@components/cards/card-detail/card-detail.component';
import { AddCardComponent } from '@components/cards/add-card/add-card.component';
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
    BrowserModule,
    BoardComponent,
    ListComponent,
    CardComponent,
    NavbarComponent,
    SettingsComponent,
    AddCardComponent,
    LoadingComponent,
    NoDataComponent,
    CardDetailComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
