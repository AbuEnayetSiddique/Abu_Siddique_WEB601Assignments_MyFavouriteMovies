import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective {
  @Input() affectStyle?: string;
  private originalBorder?: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.addStyles();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeStyles();
  }

  private addStyles() {
    if (this.affectStyle === 'underline') {
      this.renderer.setStyle(this.elementRef.nativeElement, 'text-decoration', 'underline');
    } else if (this.affectStyle === 'bold') {
      this.renderer.setStyle(this.elementRef.nativeElement, 'font-weight', 'bold');
    }
  }

  private removeStyles() {
    if (this.affectStyle === 'underline') {
      this.renderer.removeStyle(this.elementRef.nativeElement, 'text-decoration');
    } else if (this.affectStyle === 'bold') {
      this.renderer.removeStyle(this.elementRef.nativeElement, 'font-weight');

    }
  }

}
