import { Directive, HostListener, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicComponentHost]'
})
export class AppComponentHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }
}
