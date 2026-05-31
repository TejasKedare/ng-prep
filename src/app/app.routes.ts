import { Routes } from '@angular/router';
import { UserListing } from './pages/user-listing/user-listing';

export const routes: Routes = [
    { path: "", loadComponent: () => import('./pages/home/home').then(m => m.Home) },
    { path: "listing", component: UserListing },
    { path: "details/:id", loadComponent: () => import('./pages/user-details/user-details').then(m => m.UserDetails) },
    { path: "**", loadComponent: () => import('./pages/page-not-found/page-not-found').then(m => m.PageNotFound) }
];