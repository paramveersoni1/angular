import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductaddComponent } from './productadd/productadd.component';


const routes: Routes = [
  {
    path: '', component : ProductsComponent,
  },
]


@NgModule({
  declarations: [ ProductsComponent, ProductaddComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  entryComponents:[
    [ProductaddComponent]
  ]
})
export class ProductsModule { }
