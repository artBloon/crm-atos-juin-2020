import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageListeClientsComponent } from './pages/page-liste-clients/page-liste-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { TemplateModule } from '../template/template.module';
import { TextModule } from '../text/text.module';
import { SharedModule } from '../shared/shared.module';
import { LibraryModuleModule } from '../library/library-module.module';



@NgModule({
  declarations: [PageListeClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    TemplateModule,
    TextModule,
    LibraryModuleModule,
    SharedModule
  ]
})
export class ClientsModule { }
