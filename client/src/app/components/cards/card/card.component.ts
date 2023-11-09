import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarModule } from 'primeng/sidebar';
import { ChipModule } from 'primeng/chip';

import { CardDetailComponent } from '@components/cards/card-detail/card-detail.component';
import { ICard } from '@models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [CommonModule, ChipModule, SidebarModule, CardDetailComponent],
})
export class CardComponent {
  @Input() card!: ICard;
  sidebarVisible = false;
}
