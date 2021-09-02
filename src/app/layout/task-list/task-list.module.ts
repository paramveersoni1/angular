import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './task-list.component';

const routes: Routes = [
  {
    path: '', component : TaskListComponent,
  },
]

@NgModule({
  declarations:  [ TaskListComponent ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class TaskListModule { }
