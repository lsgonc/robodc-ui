import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'robodc-text',
  imports: [NgClass],
  templateUrl: './text.component.html',
  styleUrl: './text.component.css'
})
export class TextComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() type: 'secondary' | 'success' | 'warning' | 'danger' | null = null;
  @Input() disabled: boolean = false;
  @Input() mark: boolean = false;
  @Input() code: boolean = false;
  @Input() keyboard: boolean = false;
  @Input() underline: boolean = false;
  @Input() delete: boolean = false;
  @Input() strong: boolean = false;
  @Input() italic: boolean = false;
  @Input() info: boolean = false;

}
