import { NgClass } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'robodc-button',
  imports: [
    NgClass
  ],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() label!: string;
  @Input() variant: 'primary' | 'info' | 'success' | 'danger' = 'primary'
  @Input() type: 'normal' | 'squared' = 'normal'
  @Input() size: 'sm' | 'md' | 'lg' = 'md'

  
}

