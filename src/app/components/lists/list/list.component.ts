import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderListModule } from 'primeng/orderlist';

import { CardComponent } from '@components/cards/card/card.component';
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
}
