import { Component } from '@angular/core';

interface Nav {
  link: string;
  name: string;
  exact: boolean;
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <img [src]="logo" class="logo">
      <nav class="nav">
        <a 
          *ngFor="let item of nav"
          [routerLink]="[item.link]"
          [routerLinkActive]="'active'"
          [routerLinkActiveOptions]="{ exact: item.exact }"
          [innerHTML]="item.name"></a>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  logo: string = 'img/logo.svg';
  nav: Nav[] = [
    {
      link: '/',
      name: 'Home',
      exact: true
    }, {
      link: '/passengers',
      name: 'Passengers',
      exact: false
    }, {
      link: '/404',
      name: '404',
      exact: false
    }
  ]
}
