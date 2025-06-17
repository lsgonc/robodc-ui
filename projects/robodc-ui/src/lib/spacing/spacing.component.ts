import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'robodc-spacing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="spacing-container" [ngStyle]="containerStyles">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .spacing-container {
      display: flex;
      box-sizing: border-box;
      width: 100%;
    }
  `]
})
export class SpacingComponent {
  @Input() gap: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'none';
  @Input() direction: 'row' | 'column' = 'row';
  @Input() justify: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly' = 'start';
  @Input() align: 'start' | 'end' | 'center' | 'baseline' | 'stretch' = 'stretch';
  @Input() fullWidth: boolean = true;
  @Input() wrap: 'wrap' | 'nowrap' = 'wrap'; // novo recurso opcional

  private gapSizes: { [key: string]: string } = {
    none: '0',
    xs: '0.25rem',  // 4px
    sm: '0.5rem',   // 8px
    md: '1rem',     // 16px
    lg: '1.5rem',   // 24px
    xl: '2rem'      // 32px
  };

  private mapFlexValue(value: string) {
    const map: Record<string, string> = {
      start: 'flex-start',
      end: 'flex-end',
      center: 'center',
      'space-between': 'space-between',
      'space-around': 'space-around',
      'space-evenly': 'space-evenly',
      baseline: 'baseline',
      stretch: 'stretch'
    };
    return map[value] || value;
  }

  get containerStyles() {
    return {
      'flex-direction': this.direction,
      'justify-content': this.mapFlexValue(this.justify),
      'align-items': this.mapFlexValue(this.align),
      'gap': this.gapSizes[this.gap],
      'flex-wrap': this.wrap,
      'width': this.fullWidth ? '100%' : 'auto',
      'box-sizing': 'border-box'
    };
  }
}

