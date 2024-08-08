import { Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { ProfileComponent } from './feature/profile/profile.component';
import { ErrorComponent } from './feature/error/error.component';

export const routes: Routes = [

 
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'profile/:id',
        component:ProfileComponent
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home',
    },
    {
        path:"**",
        component:ErrorComponent
    }
 
];
