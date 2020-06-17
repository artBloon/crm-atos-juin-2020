import { Directive, Input, OnInit, HostBinding } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective  implements OnInit{
  @Input() color: string;
  @HostBinding("class") nomClass: string;

  constructor() { }

  ngOnInit(): void {
    this.nomClass = this.color;
  }
}
