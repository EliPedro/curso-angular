import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[hightlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver()
  {
    this.backgroundColor = this.hightlightColor;
  }

  @HostListener('mouseleave') onMouseLeave()
  {
    this.backgroundColor =  this.defaultColor;
  }

@HostBinding('style.backgroundColor') backgroundColor:string;

@Input() defaultColor: string = 'white';
@Input('hightlight') hightlightColor: string = 'yellow';

ngOnInit(): void {
  this.backgroundColor = this.defaultColor;
}

constructor() { }

}
