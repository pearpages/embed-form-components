
import { provideRouter, RouterConfig } from '@angular/router';
import { ShowroomComponent } from './showroom/showroom.component';

export const routes: RouterConfig = [
  { path: '', component: ShowroomComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
