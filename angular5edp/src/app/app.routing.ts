/**
 * Created by griga on 7/11/16.
 */


import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from "./shared/layout/app-layouts/main-layout.component";
import {AuthLayoutComponent} from "./shared/layout/app-layouts/auth-layout.component";
import {EmptyLayoutComponent} from "./shared/layout/app-layouts/empty-layout.component";
import {CustomLayoutComponent} from "./shared/layout/app-layouts/custom-layout.component";

import {ModuleWithProviders} from "@angular/core";

export const routes: Routes = [
    {
        path: 'home',
        component: CustomLayoutComponent,
        children: [
            {
                path: '', redirectTo: 'home', pathMatch: 'full'
            },
            {
                path: '',
                loadChildren: 'app/+home/home.module#HomeModule'
            },
        ],
    },
    {
        path: 'data-explore',
        component: CustomLayoutComponent,
        loadChildren: 'app/+data-explore/data-explore.module#DataExploreModule',
        data: {pageTitle: 'Smartadmin'}
    },

     {path: 'auth', component: AuthLayoutComponent, loadChildren: 'app/+auth/auth.module#AuthModule'},

  {path: '', redirectTo: 'auth/login',pathMatch: 'full'}

];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
