import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div>
      Not found <a [routerLink]="['/']"> go home?</a>
    </div>
  `
})
export class NotFoundComponent { }
