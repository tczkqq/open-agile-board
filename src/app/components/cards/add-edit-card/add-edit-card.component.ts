import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';

import { ICard } from '@models/card.model';

@Component({
  selector: 'app-add-edit-card',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    CommonModule,
    ButtonModule,
    EditorModule,
  ],
  templateUrl: './add-edit-card.component.html',
  styleUrls: ['./add-edit-card.component.scss'],
})
export class AddEditCardComponent {
  editedItem!: ICard;

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl(''),
    dateAdded: new FormControl(''),
    dateUpdated: new FormControl(''),
    tags: new FormControl(''),
  });

  onSubmit() {
    // TODO: Submit form based on editedItem
  }

  onReset() {
    this.form.reset();
  }
}
