import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AppdataComponent } from './appdata.component';
import { AddappdataComponent } from './addappdata/addappdata.component';
import { AngularEditorModule } from '@kolkov/angular-editor';



const routes: Routes = [
  {
    path: '', component : AppdataComponent,
  },
 
]

@NgModule({
  declarations: [ AppdataComponent, AddappdataComponent],
  imports: [
    CommonModule,
    SharedModule,
    AngularEditorModule,
    RouterModule.forChild(routes)
  ],
  entryComponents :[
       AddappdataComponent,
  ]
})
export class AppdataModule { }
