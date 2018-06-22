import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1 [innerHTML]="title"></h1>
      <img [src]="logo">
      <div>
        <input type="text" [value]="name">
      </div>
    </div>
  `
})
export class AppComponent {
  title: string;
  logo: string = 'img/logo.svg';
  name: string = 'An';

  constructor() {
    this.title = 'Ultimate Angular';
  }
}
