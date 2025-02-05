import { Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { AppNavigatorComponent } from './core/components/app-navigator/app-navigator.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'search', component: SearchBarComponent },
    { path: 'nav', component: AppNavigatorComponent },
];
