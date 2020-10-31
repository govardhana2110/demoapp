import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighter]',
})
export class HighletDirective {
  b: string;
  @Input() c: string = 'red';
  fontsize: number = 32;
  constructor() {}
  @HostListener('mouseenter') mouseover() {
    this.b = this.c;
  }
  @HostListener('mouseleave') mouseleave() {
    this.b = 'white';
  }
  @HostBinding('style.background-color') get setColor1() {
    return this.b;
  }
  @HostBinding('style.font-size') get setfont1() {
    return this.fontsize;
  }
}
