import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import * as octicons from '@primer/octicons';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[octicon]'
})
export class OcticonDirective implements OnInit {

  @Input() octicon: string;
  @Input() color: string;
  @Input() width = '.9em';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const el: HTMLElement = this.elementRef.nativeElement;
    el.innerHTML = octicons[this.octicon].toSVG();

    const icon: Node = el.firstChild;
    if (this.color) {
      this.renderer.setStyle(icon, 'fill', this.color);
    }
    if (this.width) {
      this.renderer.setStyle(icon, 'width', this.width);
      this.renderer.setStyle(icon, 'height', '100%');
    }
  }

}
