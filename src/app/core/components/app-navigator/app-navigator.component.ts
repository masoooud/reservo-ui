import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Route } from '../../../shared/types/route.interface';

@Component({
  selector: 'app-navigator',
  imports: [CommonModule],
  templateUrl: './app-navigator.component.html',
  styleUrl: './app-navigator.component.scss'
})
export class AppNavigatorComponent {

  closed: boolean = false;
  routes: Route[] = [
    { link: '/home', icon: 'house', label: 'Home' },
    { link: '/services', icon: 'wrench', label: 'Services' },
    { link: '/login', icon: 'key', label: 'Login' },
    { link: '/profile-photo', icon: 'bust-in-silhouette', label: 'Profile' }
  ];

  go(route: any): void {
    console.log('Navigating to route:', route);
  }
}
