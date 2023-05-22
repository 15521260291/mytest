import {Directive, Input, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[myD]'
})
export class MyDDirective {
  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

  ngOnInit(): void{
  }

}
