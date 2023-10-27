import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { IBoard } from '@models/board.model';

@Component({
  selector: 'app-add-edit-board',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextareaModule,
    InputTextModule,
    CommonModule,
    ButtonModule,
  ],
  templateUrl: './add-edit-board.component.html',
  styleUrls: ['./add-edit-board.component.scss'],
})
export class AddEditBoardComponent {
  editedItem!: IBoard;

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
  });

  onSubmit() {
    // TODO: Submit form based on editedItem
  }

  onReset() {
    // TODO: Reset form
  }
}
