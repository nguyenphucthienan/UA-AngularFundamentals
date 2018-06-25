import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-detail',
  styleUrls: ['passenger-detail.component.scss'],
  template: `
    <div>
      <span
        class="status" 
        [class.checked-in]="detail.checkedIn">
      </span>
      <div *ngIf="editing">
        <input
          type="text"
          [value]="detail.fullName"
          (input)="onNameChange(name.value)"
          #name>
      </div>
      <div *ngIf="!editing">
        {{ detail.fullName }}
      </div>
      <div class="date">
        Check in date: {{ detail.checkInDate ?
          (detail.checkInDate | date: 'yMMMd' | uppercase) :
          'Not checked in' }}
      </div>
      <button (click)="onView()">
        View
      </button>
      <button (click)="toggleEdit()">
        {{ this.editing ? 'Done' : 'Edit' }}
      </button>
      <button (click)="onRemove()">
        Remove
      </button>
    </div>
  `
})
export class PassengerDetailComponent implements OnChanges {
  @Input() detail: Passenger;
  @Output() view: EventEmitter<any>;
  @Output() edit: EventEmitter<any>;
  @Output() remove: EventEmitter<any>;

  editing: boolean;

  constructor() {
    this.view = new EventEmitter();
    this.edit = new EventEmitter();
    this.remove = new EventEmitter();
  }

  ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
  }

  onView() {
    this.view.emit(this.detail);
  }

  onNameChange(value: string) {
    this.detail.fullName = value;
  }

  toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }

  onRemove() {
    this.remove.emit(this.detail);
  }
}
