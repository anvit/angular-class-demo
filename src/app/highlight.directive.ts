import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.hightlight('coral');
  }


  @HostListener('mouseleave') onMouseLeave(): void {
    this.hightlight(null);
  }

  private hightlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
