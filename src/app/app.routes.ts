import { Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'search', component: SearchBarComponent },
];
