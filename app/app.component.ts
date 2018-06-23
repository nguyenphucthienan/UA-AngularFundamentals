import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1 [innerHTML]="title"></h1>
      <img [src]="logo">
      <div>
        <input
          type="text"
          [value]="name"
          (input)="handleChange($event.target.value)">
      </div>
      <div *ngIf="name.length > 2">Searching for... {{ name }}</div>
    </div>
  `
})
export class AppComponent {
  title: string;
  logo: string = 'img/logo.svg';
  name: string = '';

  constructor() {
    this.title = 'Ultimate Angular';
  }

  handleChange(value: string) {
    this.name = value;
  }
}
