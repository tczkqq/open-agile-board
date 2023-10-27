import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';

import { ICard } from '@models/card.model';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
  standalone: true,
  imports: [CommonModule, ChipModule, ButtonModule],
})
export class CardDetailComponent {
  @Input({ required: true }) card!: ICard;

  onEditClick(): void {
    console.log('Edit card');
  }

  onDeleteClick(): void {
    console.log('Delete card');
  }
}
