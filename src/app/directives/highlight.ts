import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el, 'background', 'red')
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.setStyle(this.el, 'background', 'green')
  }

}