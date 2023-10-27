import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { SelectButtonModule } from 'primeng/selectbutton';

import { ColorSchemeService, Theme } from '@services/color-scheme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  standalone: true,
  imports: [SelectButtonModule, ReactiveFormsModule],
})
export class SettingsComponent implements OnInit {
  themeControl = new FormControl(this.colorSchemeService.currentTheme());
  themeOptions: any[] = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ];

  constructor(private colorSchemeService: ColorSchemeService) {}

  ngOnInit(): void {
    this.themeControl.valueChanges.subscribe((value) => {
      this.colorSchemeService.switchTheme(value as Theme);
    });
  }
}
