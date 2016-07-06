
import { provideRouter, RouterConfig } from '@angular/router';
import { ShowroomComponent } from './showroom/showroom.component';
import { Showroom2Component } from './showroom2/showroom2.component';

export const routes: RouterConfig = [
  { path: '', component: ShowroomComponent },
  { path: 'gallery', component: Showroom2Component }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
