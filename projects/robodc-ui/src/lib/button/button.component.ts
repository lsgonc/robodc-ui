import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'robodc-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() variant: 'primary' | 'info' | 'success' | 'danger' = 'primary';
  @Input() type: 'normal' | 'squared' = 'normal';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() fullWidth: boolean = false; // Nova propriedade para largura total
  @Input() isDisabled: boolean = false;
  @Output() onClick = new EventEmitter<void>();

  onButtonClick() {
    if (this.isDisabled) return;
    this.onClick.emit();
  }
}
