import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }  from './home/home.component';
import {AccountComponent} from './account/account.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'implicit/callback', component: AccountComponent},
  { path: 'account', component: AccountComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
