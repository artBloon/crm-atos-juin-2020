import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListeOrdersComponent } from './pages/page-liste-orders/page-liste-orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { TemplateModule } from '../template/template.module';
import { TextModule } from '../text/text.module';
import { LibraryModuleModule } from '../library/library-module.module';
import { SharedModule } from '../shared/shared.module';
import { PageAddOrderComponent } from './pages/page-add-order/page-add-order.component';
import { FormOrderComponent } from './components/form-order/form-order.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PageEditOrderComponent } from './pages/page-edit-order/page-edit-order.component';



@NgModule({
  declarations: [PageListeOrdersComponent, PageAddOrderComponent, FormOrderComponent, PageEditOrderComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    TemplateModule,
    TextModule,
    LibraryModuleModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class OrdersModule { }
