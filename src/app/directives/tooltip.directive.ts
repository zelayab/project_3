import { Directive, HostListener, Input } from '@angular/core';
import { MatTooltip } from '@angular/material/tooltip';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective {
  @Input('appTooltip')
  tooltipText!: string;

  constructor(private tooltip: MatTooltip) {
    console.log('TooltipDirective created!');
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.tooltip.message = this.tooltipText;
    this.tooltip.show();
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.tooltip.hide();
  }
}
