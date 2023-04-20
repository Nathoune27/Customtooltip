import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.debug(this.el);
  }

  @HostListener('mouseover')
  onMouseEnter() {
    console.debug(this.el.nativeElement);
    this.renderer.setStyle(this.el.nativeElement.children[0], 'visibility', 'visible');
    this.renderer.setStyle(this.el.nativeElement.children[0], 'position', 'relative');
    this.renderer.setStyle(this.el.nativeElement.children[0], 'top', '50px');
    this.renderer.setStyle(this.el.nativeElement.children[0], 'left', '300px');
  }

  @HostListener('mouseout')
  onMouseLeave() {
    console.debug(this.el.nativeElement);
    this.renderer.setStyle(this.el.nativeElement.children[0], 'visibility', 'hidden');
  }
}
