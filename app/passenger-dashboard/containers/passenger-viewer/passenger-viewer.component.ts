import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { PassengerDashboardService } from '../../passenger-dashboard.service';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-viewer',
  styleUrls: ['passenger-viewer.component.scss'],
  template: `
    <div>
      <button (click)="goBack()">&lsaquo; Go back</button>
      <passenger-form 
        [detail]="passenger"
        (update)="onUpdatePassenger($event)">
      </passenger-form>
    </div>
  `
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private passengerService: PassengerDashboardService) { }

  ngOnInit() {
    this.route.params
      .switchMap((data: Passenger) => this.passengerService.getPassenger(data.id))
      .subscribe((passenger: Passenger) => this.passenger = passenger);
  }

  onUpdatePassenger(passenger: Passenger) {
    this.passengerService.updatePassenger(passenger)
      .subscribe((data: Passenger) => {
        this.passenger = Object.assign({}, this.passenger, passenger)
      });
  }

  goBack() {
    this.router.navigate(['/passengers']);
  }
}
