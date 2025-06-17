import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from '@angular/common';

export interface ButtonConfig {
  label: string;
  variant?: 'primary' | 'info' | 'success' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

@Component({
  selector: 'robodc-button-list',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './button-list.component.html',
  styleUrl: './button-list.component.css'
})
export class ButtonListComponent {
  @Input() buttons: ButtonConfig[] = [];
  @Input() gap: string = '16px'; // Aceita valores como '16px', '1rem', '2%', etc.
  @Input() columns: number = 2; // Valor padrão: 2 colunas
  @Output() buttonClick = new EventEmitter<number>();

  onButtonClick(index: number) {
    this.buttonClick.emit(index);
  }
}

