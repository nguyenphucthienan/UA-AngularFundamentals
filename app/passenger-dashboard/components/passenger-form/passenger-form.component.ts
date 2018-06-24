import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';
import { Baggage } from '../../models/baggage.interface';

@Component({
  selector: 'passenger-form',
  styleUrls: ['passenger-form.component.scss'],
  template: `
    <form #form="ngForm" novalidate>
      <div>
        Passenger ID:
        <input
          type="text"
          name="id"
          [ngModel]="detail?.id"
          #id="ngModel"
          required>
        <div *ngIf="id?.errors?.required && id.dirty" class="error">
          Passenger ID is required.
        </div>
      </div>
      <div>
        Passenger name:
        <input
          type="text"
          name="fullName"
          [ngModel]="detail?.fullName"
          #fullName="ngModel"
          required>
        <div *ngIf="fullName?.errors?.required && fullName.dirty" class="error">
          Passenger name is required.
        </div>
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
      <div>
        Luggage:
        <select
          name="baggage"
          [ngModel]="detail?.baggage">
          <option
            *ngFor="let item of baggage"
            [value]="item.key"
            [selected]="item.key === detail?.baggage">
            {{ item.value }}
          </option>
        </select>
      </div>
      <button type="submit" [disabled]="form.invalid">
        Update Passenger
      </button>
    </form>
  `
})
export class PassengerFormComponent {
  @Input() detail: Passenger;

  baggage: Baggage[] = [{
    key: 'none',
    value: 'No baggage'
  }, {
    key: 'hand-only',
    value: 'Hand baggage'
  }, {
    key: 'hold-only',
    value: 'Hold baggage'
  }, {
    key: 'hand-hold',
    value: 'Hand and hold baggage'
  }];

  toggleCheckIn(checkedIn: boolean) {
    if (checkedIn) {
      this.detail.checkInDate = Date.now();
    }
  }
}
