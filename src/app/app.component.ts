import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ApiService]
})
export class AppComponent {
  title = 'Form Components';

  constructor(private router: Router) { }

  isActive(route): boolean {
    return (this.router.url === route);
  }
}
