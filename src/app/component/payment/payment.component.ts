import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as paymentActions from '../../actions/payment';
import * as fromRoot from '../../reducers';
import { Observable } from 'rxjs';
import { Payment } from '../../models/payment';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
	selector: 'app-payment',
	templateUrl: './payment.component.html',
	styleUrls: [ './payment.component.css' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentComponent implements OnInit {
	public payments$: Observable<Payment[]>;
	public filteredPayments$: Observable<Payment[]>;
	public searchText = new FormControl('');

	constructor(public store: Store<fromRoot.State>, private router: Router) {
		this.payments$ = store.select(fromRoot.getPaymentsState);
	}

	public actionButtonConfig = {
		title: 'Make Payment',
		onActionButtonClick: this.addPayment.bind(this)
	};

	public gridHeaders = [
		{
			name: 'sn',
			displayName: 'S/N',
			classes: [ 'flex-1' ]
		},
		{
			name: 'sourceAccountNumber',
			displayName: 'Source Account Number',
			type: 'content',
			classes: [ 'flex-3' ]
		},
		{
			name: 'destinationAccountNumber',
			displayName: 'Destination Account Number',
			type: 'content',
			classes: [ 'flex-3' ]
		},
		{
			name: 'currencyCode',
			displayName: 'Currency Code',
			type: 'content',
			classes: [ 'flex-3' ]
		},
		{
			name: 'action',
			displayName: 'Actions',
			classes: [ 'flex-1' ]
		}
	];

	ngOnInit() {
		this.store.dispatch(new paymentActions.PaymentsFetchAction());

		this.payments$.subscribe((payments) => {
			this.filteredPayments$ = this.searchText.valueChanges.pipe(
				startWith(''),
				map((value = '') => {
					const filterValue = value.toString().toLowerCase();
					return payments.filter((payment) => {
						return (
							payment.sourceAccountNumber.toString().toLowerCase().indexOf(filterValue) === 0 ||
							payment.destinationAccountNumber.toString().toLowerCase().indexOf(filterValue) === 0 ||
							payment.currencyCode.toString().toLowerCase().indexOf(filterValue) === 0
						);
					});
				})
			);
		});
	}

	addPayment() {
		this.router.navigate([ '/payments/add' ]);
	}
}
