import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from '@angular/common';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'robodc-detail-modal',
  templateUrl: './detail-modal.component.html',
  styleUrl: './detail-modal.component.css',
  standalone: true,
  imports: [NgClass, ButtonComponent] // Importa o robodc-button
})
export class DetailModalComponent {
  @Input() isOpen: boolean = false; // Controla se o modal está aberto
  @Input() imageUrl: string = ''; // URL da imagem
  @Input() title: string = ''; // Título do modal
  @Input() description: string = ''; // Descrição do modal
  @Input() buttonLabel: string = 'Botão do modal'; // Texto do botão
  @Output() close = new EventEmitter<void>(); // Evento de fechamento
  @Output() buttonClick = new EventEmitter<void>();


  onClose() {
    this.close.emit();
  }

  onButtonClick() {
    this.buttonClick.emit(); // Fecha o modal ao clicar no botão
  }
}