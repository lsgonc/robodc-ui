import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { NgClass } from '@angular/common';
import { ButtonConfig } from '../button-list/button-list.component';

@Component({
  selector: 'robodc-alert-modal',
  imports: [ButtonComponent, NgClass],
  templateUrl: './alert-modal.component.html',
  styleUrl: './alert-modal.component.css'
})
export class AlertModalComponent {
  @Input() buttons: ButtonConfig[] = [];
  @Input() isOpen: boolean = false; // Controla se o modal está aberto
  @Input() title: string = ''; // Título do modal
  @Input() description: string = ''; // Descrição do modal
  @Output() close = new EventEmitter<void>(); // Evento de fechamento
  @Output() buttonClick = new EventEmitter<number>();


  onClose() {
    this.close.emit();
  }

  onButtonClick(index: number) {
    this.buttonClick.emit(index);
  }
}
