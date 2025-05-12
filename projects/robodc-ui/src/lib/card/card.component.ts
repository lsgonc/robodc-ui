import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'robodc-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title!: string
  @Input() imgUrl!: string
  @Output() click = new EventEmitter<void>()

  onClick()
  {
    this.click.emit()
  }


}
