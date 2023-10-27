import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { ChipModule } from 'primeng/chip';
import {
  DialogService,
  DynamicDialogRef,
  DynamicDialogModule,
} from 'primeng/dynamicdialog';

import { AddEditCardComponent } from '@components/cards/add-edit-card/add-edit-card.component';
import { BoardMngmtService } from '@services/board-mngmt.service';
import { ICard } from '@models/card.model';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss'],
  standalone: true,
  imports: [
    DynamicDialogModule,
    ConfirmDialogModule,
    CommonModule,
    ButtonModule,
    EditorModule,
    FormsModule,
    ChipModule,
  ],
  providers: [DialogService, ConfirmationService],
})
export class CardDetailComponent implements AfterViewInit, OnDestroy {
  @Input({ required: true }) card!: ICard;
  ref!: DynamicDialogRef;

  constructor(
    private boardMngmt: BoardMngmtService,
    private dialogService: DialogService,
    private confirmationService: ConfirmationService,
  ) {}

  ngAfterViewInit(): void {
    this.boardMngmt.setDragDropActive(false);
  }

  ngOnDestroy(): void {
    this.boardMngmt.setDragDropActive(true);
  }

  onEditClick(): void {
    this.ref = this.dialogService.open(AddEditCardComponent, {
      header: 'Edit Card',
      data: { card: this.card },
    });
  }

  onDeleteClick(): void {
    this.confirmationService.confirm({
      message: 'Are you sure that you want to proceed?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        //TODO: Delete card
      },
    });
  }
}
