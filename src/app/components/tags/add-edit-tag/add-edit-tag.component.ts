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
    ReactiveFormsModule,
    InputTextareaModule,
    ColorPickerModule,
    InputTextModule,
    CommonModule,
    ButtonModule,
  ],
  templateUrl: './add-edit-tag.component.html',
  styleUrls: ['./add-edit-tag.component.scss'],
})
export class AddEditTagComponent {
  editedItem!: ITag;

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    color: new FormControl('#FFFFFF'),
  });

  onSubmit() {
    // TODO: Submit form based on editedItem
  }

  onReset() {
    this.form.reset();
    this.form.get('color')?.setValue('#FFFFFF');
  }
}
