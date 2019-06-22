
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as errorActions from '../actions/error';
import * as accountActions from '../actions/account';
import { AccountService } from '../services/account.service';

@Injectable()
export class AccountEffects {
	@Effect()
	fetch$: Observable<Action> = this.actions$.pipe(
		ofType(accountActions.FETCH_ACCOUNTS),
		switchMap(() =>
			this.accountService.fetchAccounts().pipe(
				map((data: any) => {
          console.log(data);
					return new accountActions.AccountsStoreAction(data);
        }),
        catchError(error => of(new errorActions.ErrorAction(error, { showConsole: true, ifCompletedActions: []})))
			)
		)
	);

	constructor(private accountService: AccountService, private actions$: Actions) {}
}
