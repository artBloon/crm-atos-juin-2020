import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorDirective } from './directives/color.directive';
import { TotalPipe } from './pipes/total.pipe';
import { StateDirective } from './directives/state.directive';
import { CaTTCPipe } from './pipes/ca-ttc.pipe';



@NgModule({
  declarations: [ColorDirective, TotalPipe, StateDirective, CaTTCPipe],
  imports: [
    CommonModule
  ],
  exports: [ColorDirective, TotalPipe, StateDirective, CaTTCPipe]
})
export class SharedModule { }
