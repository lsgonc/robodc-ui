import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from "../button/button.component";

export interface ButtonConfig {
  label: string;
  variant?: 'primary' | 'info' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

@Component({
  selector: 'robodc-button-list',
  imports: [ButtonComponent],
  templateUrl: './button-list.component.html',
  styleUrl: './button-list.component.css'
})
export class ButtonListComponent {
  @Input() buttons: ButtonConfig[] = [];
  @Output() buttonClick = new EventEmitter<number>(); // Emite o índice do botão clicado

  onButtonClick(index: number) {
    this.buttonClick.emit(index);
  }
}
