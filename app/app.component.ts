import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <nav class="nav">
        <a 
          [routerLink]="['/']"
          [routerLinkActive]="'active'"
          [routerLinkActiveOptions]="{ exact: true }">Home</a>
        <a 
          [routerLink]="['/404']"
          [routerLinkActive]="'active'">404</a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent { }
