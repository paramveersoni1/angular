import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserlistComponent } from './userlist.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule,  } from '@angular/router';

const routes: Routes = [
  {
    path: '', component : UserlistComponent,
  },
]

@NgModule({
  declarations: [UserlistComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class UserlistModule { }
