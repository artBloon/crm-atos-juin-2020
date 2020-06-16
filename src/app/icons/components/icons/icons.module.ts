import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconNavComponent } from './icon-nav.component';
import { IconCloseComponent } from './icon-close.component';
import { IconEditComponent } from './icon-edit.component';
import { IconDeleteComponent } from './icon-delete.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [IconNavComponent, IconCloseComponent, IconEditComponent, IconDeleteComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [IconNavComponent, IconCloseComponent, IconEditComponent, IconDeleteComponent]
})
export class IconsModule { }
