import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <form #form="ngForm" novalidate>
      {{ detail | json }}
      <div>
        Passenger ID:
        <input
          type="text"
          name="id"
          [ngModel]="detail?.id">
      </div>
      <div>
        Passenger name:
        <input
          type="text"
          name="fullName"
          [ngModel]="detail?.fullName">
      </div>
      <div>
        Check in:
        <input
          type="checkbox"
          name="checkedIn"
          [value]="true"
          [ngModel]="detail?.checkedIn"
          (ngModelChange)="toggleCheckIn($event)">
      </div>
      <div *ngIf="form.value.checkedIn">
        Check in date:
        <input
          type="text"
          name="checkInDate"
          [ngModel]="detail?.checkInDate">
      </div>
      {{ form.value | json }}
    </form>
  `
})
export class PassengerFormComponent {
  @Input() detail: Passenger;

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkInDate = Date.now();
    }
  }
}
