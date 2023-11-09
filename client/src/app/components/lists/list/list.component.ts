import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderListModule } from 'primeng/orderlist';

import { debounceTime } from 'rxjs/operators';

import { CardComponent } from '@components/cards/card/card.component';
import { BoardMngmtService } from '@services/board-mngmt.service';
import { IList } from '@models/list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [OrderListModule, CommonModule, CardComponent],
})
export class ListComponent {
  @Input() list!: IList;
  dragDropActive = this.boardMngmt.getDragDropActive().pipe(debounceTime(100));

  constructor(public boardMngmt: BoardMngmtService) {}
}
