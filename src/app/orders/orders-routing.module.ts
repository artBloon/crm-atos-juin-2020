import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageListeOrdersComponent } from './pages/page-liste-orders/page-liste-orders.component';


const routes: Routes = [
  { path: '', component: PageListeOrdersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OrdersRoutingModule { }
