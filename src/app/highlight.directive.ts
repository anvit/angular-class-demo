import { Directive, ElementRef, HostListener, Input, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @Input('highlight') hightlightColor: string;
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.hightlight(this.hightlightColor);
  }


  @HostListener('mouseleave') onMouseLeave(): void {
    this.hightlight(null);
  }

  private hightlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
