import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { CharitiesComponent } from './charities.component';
import { CharitiesAddComponent } from './charities-add/charities-add.component';




const routes: Routes = [
  {
    path: '', component : CharitiesComponent,
  },
]

@NgModule({
  declarations: [CharitiesComponent, CharitiesAddComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  entryComponents:[
    CharitiesAddComponent
  ]
})
export class CharitiesModule { }
