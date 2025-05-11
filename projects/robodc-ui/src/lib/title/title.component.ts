import {  NgClass, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'robodc-title',
  imports: [NgClass, NgTemplateOutlet],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() level: 1 | 2 | 3 | 4 | 5 = 1;
  @Input() type: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'primary';
  @Input() disabled: boolean = false;
  @Input() mark: boolean = false;
  @Input() code: boolean = false;
  @Input() keyboard: boolean = false;
  @Input() underline: boolean = false;
  @Input() delete: boolean = false;
  @Input() strong: boolean = false;
  @Input() italic: boolean = false;
}
