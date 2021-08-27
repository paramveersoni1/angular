import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BanklistComponent } from './banklist.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { AddBankComponent } from './add-bank/add-bank.component';



const routes: Routes = [
  {
    path: '', component : BanklistComponent,
  },
]

@NgModule({
  declarations: [BanklistComponent, AddBankComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],

  entryComponents:[
    AddBankComponent
  ]
})
export class BanklistModule { }
