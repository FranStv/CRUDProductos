import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { hasModifierKey } from '@angular/cdk/keycodes';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'',component:LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'login',component:LoginComponent}
];
