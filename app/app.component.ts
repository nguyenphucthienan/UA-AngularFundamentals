import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1 [innerHTML]="title"></h1>
      <img [src]="logo">
      <div>
        <button (click)="handleClick(username.value)">
          Change Name
        </button>
          <input type="text" #username>
      </div>
      <div>{{ name }}</div>
    </div>
  `
})
export class AppComponent {
  title: string;
  logo: string = 'img/logo.svg';
  name: string;

  constructor() {
    this.title = 'Ultimate Angular';
  }

  handleClick(value: string) {
    this.name = value;
  }
}
