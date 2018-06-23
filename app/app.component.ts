import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h1 [innerHTML]="title"></h1>
      <img [src]="logo">
      <div>
        <button (click)="handleClick()">
          Change Name
        </button>
        <input 
          type="text" 
          [ngModel]="name"
          (ngModelChange)="handleChange($event)">
        <input 
          type="text" 
          [(ngModel)]="name">
      </div>
      <div>{{ name }}</div>
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

  handleClick() {
    this.name = "An Nguyen";
  }

  handleChange(value: string) {
    this.name = value
  }
}
