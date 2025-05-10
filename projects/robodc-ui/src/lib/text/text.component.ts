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
}
