import { Directive, ElementRef, HostListener } from "@angular/core";



@Directive({
  selector: '[highlight]'
})

export class HighlightDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.styles.background = 'red'
  }

  @HostListener('mouseenter') 
  onMouseEnter() {
    this.el.nativeElement.styles.background = 'green'
  }
}