import {ComponentFactoryResolver, Directive, Input, ViewContainerRef} from '@angular/core';
import {DataHolder} from '../data-holder';

@Directive({
  selector: '[appContAcc]'
})
export class ContAccDirective<T> {
  @Input() data: T;
  @Input() params?: any;
  @Input() set template(template: DataHolder<T>){
    let factory = this.factResolver.resolveComponentFactory(<any>template);
    let elemRef = this.contRef.createComponent(factory);
    (<DataHolder<T>>elemRef.instance).data = this.data;
    (<DataHolder<T>>elemRef.instance).params  = this.params;
  }

  constructor(private contRef: ViewContainerRef, private factResolver: ComponentFactoryResolver) { }

}
