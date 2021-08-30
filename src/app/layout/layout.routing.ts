import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



// components
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [

            // {
            //     path: 'category',
            //     loadChildren: './category/category.module#CategoryModule',
            //     data: {breadcrumb: 'Categories', title: 'category'}
            // },
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule',
                data: {breadcrumb: 'Dashboard', title: 'Dashboard'}
            },
            {
                path: 'banklist',
                loadChildren: './banklist/banklist.module#BanklistModule',
                data: {breadcrumb: 'Dashboard', title: 'banklist'}
            },
            {
                path: 'userlist',
                loadChildren: './userlist/userlist.module#UserlistModule',
                data: {breadcrumb: 'Dashboard', title: 'userlist'}
            },
            {
                path: 'charities',
                loadChildren: './charities/charities.module#CharitiesModule',
                data: {breadcrumb: 'Dashboard', title: 'charities'}
            },
            {
                path: 'subscribeplans',
                loadChildren: './subscribeplans/subscribeplans.module#SubscribeplansModule',
                data: {breadcrumb: 'Dashboard', title: 'charities'}
            },
            
        ]
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class LayoutRoutingModule {
}
