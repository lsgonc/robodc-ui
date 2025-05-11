import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'robodc-link',
  imports: [NgClass],
  templateUrl: './link.component.html',
  styleUrl: './link.component.css'
})
export class LinkComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() href: string = '';
  @Input() target: string = '_self';
  @Input() disabled: boolean = false;
}
