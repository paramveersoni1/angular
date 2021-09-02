import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './message.component';
import { AngularEditorModule } from '@kolkov/angular-editor';

const routes: Routes = [
  {
    path: '', component : MessageComponent,
  },
]

@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    AngularEditorModule
  ]
})
export class MessageModule { }
