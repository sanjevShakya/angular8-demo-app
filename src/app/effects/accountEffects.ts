import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as errorActions from '../actions/error';
import * as accountActions from '../actions/account';
import { AccountService } from '../services/account.service';
import { Account } from '../models/account';
import { Router } from '@angular/router';

@Injectable()
export class AccountEffects {
	@Effect()
	fetch$: Observable<Action> = this.actions$.pipe(
		ofType(accountActions.FETCH_ACCOUNTS),
		switchMap(() =>
			this.accountService.fetchAccounts().pipe(
				map((data: any) => {
					return new accountActions.AccountsStoreAction(data);
				}),
				catchError((error) =>
					of(new errorActions.ErrorAction(error, { showConsole: true, ifCompletedActions: [] }))
				)
			)
		)
	);

	@Effect()
	add$: Observable<Action> = this.actions$.pipe(
		ofType(accountActions.ADD_ACCOUNTS),
		switchMap(({ payload }) => {
			return this.accountService.addAccount(payload).pipe(
				map((data: any) => {
					this.router.navigate([ '/customers' ]);
					return { type: 'noop' };
				})
			);
		})
	);

  @Effect()
	fetchById$: Observable<Action> = this.actions$.pipe(
		ofType(accountActions.FETCH_ACCOUNT_BY_ID),
		switchMap(({ payload }) => {
			return this.accountService.fetchAccount(payload).pipe(
				map((data: Account) => {
					return new accountActions.StoreCurrentAccount(data);
				})
			);
		})
	);

	constructor(private accountService: AccountService, private actions$: Actions, private router: Router) {}
}
