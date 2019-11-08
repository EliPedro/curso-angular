import { Directive, Input,
         TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {


  @Input() set ngElse(condition:boolean)
  {
    if(!condition)
    {
      this._viewCoantainerRef.createEmbeddedView(this._temolateRef);
    }else
    {
      this._viewCoantainerRef.clear();
    }
  }
  constructor(private _temolateRef:TemplateRef<any>,
    private _viewCoantainerRef:ViewContainerRef) 
    {

    }

}
