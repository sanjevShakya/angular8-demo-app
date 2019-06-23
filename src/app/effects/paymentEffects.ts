import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as errorActions from '../actions/error';
import * as paymentActions from '../actions/payment';
import { PaymentService } from '../services/payment.service';
import { Payment } from '../models/payment';
import { Router } from '@angular/router';
import { PAYMENT_MESSAGES } from '../constants';

@Injectable()
export class PaymentEffects {
	@Effect()
	fetch$: Observable<Action> = this.actions$.pipe(
		ofType(paymentActions.FETCH_PAYMENTS),
		switchMap(() =>
			this.paymentService.fetchPayments().pipe(
				map((data: any) => new paymentActions.PaymentsStoreAction(data)),
				catchError((error) =>
					of(
						new errorActions.ErrorAction(error, {
							showConsole: true,
							ifCompletedActions: [],
							message: PAYMENT_MESSAGES.FETCH_ERROR
						})
					)
				)
			)
		)
	);

	@Effect()
	add$: Observable<Action> = this.actions$.pipe(
		ofType(paymentActions.ADD_PAYMENTS),
		switchMap(({ payload }) =>
			this.paymentService.addPayment(payload).pipe(
				map((data: any) => {
					this.router.navigate([ '/payments' ]);
					return { type: 'noop' };
				}),
				catchError((error) =>
					of(
						new errorActions.ErrorAction(error, {
							showConsole: true,
							ifCompletedActions: [],
							message: PAYMENT_MESSAGES.POST_ERROR
						})
					)
				)
			)
		)
	);

	@Effect()
	fetchById$: Observable<Action> = this.actions$.pipe(
		ofType(paymentActions.FETCH_PAYMENT_BY_ID),
		switchMap(({ payload }) =>
			this.paymentService.fetchPayment(payload).pipe(
				map((data: Payment) => new paymentActions.StoreCurrentPayment(data)),
				catchError((error) =>
					of(
						new errorActions.ErrorAction(error, {
							showConsole: true,
							ifCompletedActions: [],
							message: PAYMENT_MESSAGES.FETCH_BY_ID_ERROR
						})
					)
				)
			)
		)
	);

	constructor(private paymentService: PaymentService, private actions$: Actions, private router: Router) {}
}
