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

import { IList } from '@models/list.model';

@Component({
  selector: 'app-add-edit-list',
  standalone: true,
  imports: [
    InputTextareaModule,
    ReactiveFormsModule,
    InputTextModule,
    CommonModule,
    ButtonModule,
  ],
  templateUrl: './add-edit-list.component.html',
  styleUrls: ['./add-edit-list.component.scss'],
})
export class AddEditListComponent {
  editedItem!: IList;

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
