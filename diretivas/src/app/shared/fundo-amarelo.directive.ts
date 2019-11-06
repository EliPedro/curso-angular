import { element } from 'protractor';
import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(private _elementRef: ElementRef, private _renderer:Renderer) 
  {
    //  _elementRef.nativeElement.style.backgroundColor ='yellow';
      this._renderer
      .setElementStyle(this._elementRef.nativeElement,
        'backgroundColor'
        ,'yellow')
   }
}
