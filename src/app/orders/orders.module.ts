import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListeOrdersComponent } from './pages/page-liste-orders/page-liste-orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { TemplateModule } from '../template/template.module';
import { TextModule } from '../text/text.module';
import { LibraryModuleModule } from '../library/library-module.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PageListeOrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    TemplateModule,
    TextModule,
    LibraryModuleModule,
    SharedModule
  ]
})
export class OrdersModule { }
