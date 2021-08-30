// imports
import { LayoutRoutingModule } from './layout.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { LayoutComponent } from './layout.component';

import { HeaderComponent } from './common/header/header.component';

// modules
import { ModalModule } from 'ngx-bootstrap/modal';
import { ChangePasswordModule } from './common/change-password/change-password.module';
import { SideBarComponent } from './common/side-bar/side-bar.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SideBarComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    ModalModule.forRoot(),
    ChangePasswordModule
  ],
  entryComponents: []
})
export class LayoutModule { }

