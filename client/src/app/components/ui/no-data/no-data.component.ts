import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-no-data',
  standalone: true,
  templateUrl: './no-data.component.html',
  styleUrls: ['./no-data.component.scss'],
})
export class NoDataComponent {
  @Input() message!: string;
}
