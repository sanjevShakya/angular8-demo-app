import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as paymentActions from '../../actions/payment';
import * as fromRoot from '../../reducers';
import { Observable } from 'rxjs';
import { Payment } from '../../models/payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentComponent implements OnInit {
  public payments$: Observable<Payment[]>;
  constructor(public store: Store<fromRoot.State>) {
    this.payments$ = store.select(fromRoot.getPaymentsState);
  }

  public gridHeaders = [
		{
			name: 'sn',
      displayName: 'S/N',
      classes: ['flex-1']
		},
		{
			name: 'sourceAccountNumber',
			displayName: 'Source Account Number',
      type: 'content',
      classes: ['flex-3']
		},
		{
			name: 'destinationAccountNumber',
			displayName: 'Destination Account Number',
      type: 'content',
      classes: ['flex-3']

		},
		{
			name: 'currencyCode',
			displayName: 'Currency Code',
      type: 'content',
      classes: ['flex-3']
		},
		{
			name: 'action',
      displayName: 'Actions',
      classes: ['flex-1']
		}
  ];

  ngOnInit() {
		this.store.dispatch(new paymentActions.PaymentsFetchAction());
  }

  editPayment(payment:Payment) {
    console.log('navigate with', payment);
  }
}
