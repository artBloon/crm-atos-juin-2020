import { Directive, HostBinding, Input, OnChanges } from '@angular/core';
import { StateOrder } from '../enums/state-order.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input() state: StateOrder;
  @HostBinding("class") nomClass: string;
  constructor() { }

  ngOnChanges(): void{
    this.nomClass =this.formatClass(this.state);
  }

  private formatClass(state: StateOrder): string{
    return'state-'+state.toLocaleLowerCase();
  }
}

// récupérer item.state
// générer un nom de class (string) à partir de state-(valeur de item.state)
// si item.state vaut OPTION => state-option
// si item.state vaut CANCELED => state-canceled
// si item.state vaut CONFIRMED => state-confirmed
// binder la propriété class du host element td avec state option, state canceled ou staate confirmed
