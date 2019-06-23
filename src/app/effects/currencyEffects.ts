
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as errorActions from '../actions/error';
import * as currenctActions from '../actions/currency';
import { CurrencyService } from '../services/currency.service';

@Injectable()
export class CurrencyEffects {
	@Effect()
	update$: Observable<Action> = this.actions$.pipe(
		ofType(currenctActions.CURRENCIES_UPDATE),
		switchMap(() =>
			this.currencyService.getRates().pipe(
				map((data: any) => {
					return new currenctActions.CurrenciesUpdatedAction(data);
        }),
        catchError(error => of(new errorActions.ErrorAction(error, { showConsole: true, ifCompletedActions: []})))
			)
		)
	);

	constructor(private currencyService: CurrencyService, private actions$: Actions) {}
}
