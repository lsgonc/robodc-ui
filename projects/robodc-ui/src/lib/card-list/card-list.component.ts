import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { CardComponent } from '../card/card.component';

interface CardData {
  title: string;
  imgUrl: string;
}

@Component({
  selector: 'robodc-card-list',
  imports: [CardComponent, NgFor],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css',
  standalone: true // Adicione esta linha se estiver usando Angular 17+
})
export class CardListComponent {
  @Input() cards: CardData[] = [];
  @Output() click = new EventEmitter<number>();
  currentIndex = 0;
  cardsToShow = 3; // Número padrão de cards a mostrar
  cardWidth = 16; // Largura padrão de cada card em rem

  ngOnInit() {
    this.calculateCardsToShow();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.calculateCardsToShow();
  }

  calculateCardsToShow() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) { // Mobile
      this.cardsToShow = 1;
      this.cardWidth = screenWidth * 0.8; // 80% da largura da tela
    } else if (screenWidth < 1024) { // Tablet
      this.cardsToShow = 2;
      this.cardWidth = 14;
    } else { // Desktop
      this.cardsToShow = 3;
      this.cardWidth = 16;
    }
  }

  onCardClick(index: number) {
    this.click.emit(index);
  }

  next() {
    const maxIndex = this.cards.length - this.cardsToShow;
    if (this.currentIndex < maxIndex) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0; // Loop back to start
    }
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.cards.length - this.cardsToShow; // Loop to end
    }
  }

  goTo(index: number) {
    const maxIndex = this.cards.length - this.cardsToShow;
    if (index <= maxIndex && index >= 0) {
      this.currentIndex = index;
    }
  }
}