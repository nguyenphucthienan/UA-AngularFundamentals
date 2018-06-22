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
      </div>
      <div>
        <input 
          type="text" 
          [value]="name"
          (input)="handleInput($event)"
          (blur)="handleBlur($event)">
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

  handleInput(event: any) {
    this.name = event.target.value;
  }

  handleBlur(event: any) {
    this.name = event.target.value;
  }
}
