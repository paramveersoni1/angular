import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { SubscribeplansComponent } from './subscribeplans.component';
import { AddsubscribeComponent } from './addsubscribe/addsubscribe.component';



const routes: Routes = [
  {
    path: '', component : SubscribeplansComponent,
  },
]

@NgModule({
  declarations:  [ SubscribeplansComponent, AddsubscribeComponent ],
  imports: [
    CommonModule,
    
    SharedModule,
    RouterModule.forChild(routes),
  ],
  entryComponents:[
    AddsubscribeComponent
  ]
})
export class SubscribeplansModule { }
