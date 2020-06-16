import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListeOrdersComponent } from './pages/page-liste-orders/page-liste-orders.component';
import { OrdersRoutingModule } from './orders-routing.module';



@NgModule({
  declarations: [PageListeOrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
