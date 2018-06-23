import { Component } from '@angular/core';

interface Passenger {
  id: number;
  fullName: string;
  checkedIn: boolean;
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <img [src]="logo">
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
          {{ i + ': ' + passenger.fullName }}
        </li>
      </ul>
    </div>
  `
})
export class AppComponent {
  logo: string = 'img/logo.svg';

  passengers: Passenger[] = [{
    id: 1,
    fullName: 'Stephen',
    checkedIn: true
  }, {
    id: 2,
    fullName: 'Rose',
    checkedIn: false
  }, {
    id: 3,
    fullName: 'James',
    checkedIn: true
  }, {
    id: 4,
    fullName: 'Louise',
    checkedIn: true
  }, {
    id: 5,
    fullName: 'Tina',
    checkedIn: false
  }];
}
