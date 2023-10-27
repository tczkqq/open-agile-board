import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { InputTextareaModule } from 'primeng/inputtextarea';
import { ColorPickerModule } from 'primeng/colorpicker';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { ITag } from '@models/tag.model';

@Component({
  selector: 'app-add-edit-tag',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    ColorPickerModule,
    ReactiveFormsModule,
    InputTextareaModule,
    ButtonModule,
  ],
  templateUrl: './add-edit-tag.component.html',
  styleUrls: ['./add-edit-tag.component.scss'],
})
export class AddEditTagComponent {
  editedItem!: ITag;

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    color: new FormControl('#FFFFFF', [Validators.required]),
  });

  onSubmit() {
    // TODO: Submit form based on editedItem
  }

  onReset() {
    // TODO: Reset form
  }
}
