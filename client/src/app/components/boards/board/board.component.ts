import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorModule } from 'primeng/editor';
import { ButtonModule } from 'primeng/button';

import { LoadingComponent } from '@components/ui/loading/loading.component';
import { NoDataComponent } from '@components/ui/no-data/no-data.component';
import { CardComponent } from '@components/cards/card/card.component';
import { ListComponent } from '@components/lists/list/list.component';
import { IBoard } from '@models/board.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  standalone: true,
  imports: [
    LoadingComponent,
    NoDataComponent,
    CardComponent,
    ListComponent,
    ButtonModule,
    CommonModule,
    EditorModule,
  ],
})
export class BoardComponent {
  @Input() board!: IBoard;
}
