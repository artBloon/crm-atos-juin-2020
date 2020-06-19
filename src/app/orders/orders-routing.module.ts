import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageListeOrdersComponent } from './pages/page-liste-orders/page-liste-orders.component';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';


const routes: Routes = [
  { path: '', component: PageListeOrdersComponent},
  { path: 'add', component: PageAddOrderComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OrdersRoutingModule { }
