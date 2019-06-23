import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-card',
	styleUrls: [ './card.component.css' ],
	template: `
      <div class="card-content-wrapper">
      <mat-toolbar>
      <span>{{ title }}</span>
  </mat-toolbar>
      <mat-card class="card-content">

                <ng-content></ng-content>
                </mat-card>
                </div>
                `
})
export class CardComponent {
	@Input() title: String;
	@Input() goBackRoutePath: String;

	constructor() {}
}
