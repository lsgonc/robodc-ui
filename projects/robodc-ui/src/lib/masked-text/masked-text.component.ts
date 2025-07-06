import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'robodc-masked-text',
  templateUrl: './masked-text.component.html',
  styleUrls: ['./masked-text.component.css'],
  imports: [
    CommonModule
  ]
})
export class MaskedTextComponent {
  @Input() text: string = '';
  @Input() maskChar: string = '•';

  show: boolean = false;

  toggleVisibility() {
    this.show = !this.show;
  }

  get displayText(): string {
    return this.show ? this.text : this.maskChar.repeat(this.text.length);
  }
}
