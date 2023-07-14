import { Directive, HostBinding, Input,HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAboutHighlight]'
})
export class AboutHighlightDirective {

  @Input() highlight:string = 'yellow'
  @HostBinding('style.backgroundColor') backgroundColor:string = ''

  
  @HostBinding('style.borderRadius') border: string = ''

  constructor(private el:ElementRef) { }

  @HostListener('mouseenter',['$event'])
  onMouseEnter(event:Event){
    this.backgroundColor = this.highlight,
    this.border = '20em'
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.backgroundColor = 'transparent'
    this.border = '0em'
  }
}
