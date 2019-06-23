import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as errorActions from '../actions/error';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorEffects {
	@Effect()
	update$: Observable<Action> = this.actions$.pipe(
		ofType(errorActions.HANDLE_ERROR),
		map((errDetails: any) => {
			let errorMessage = (errDetails && errDetails.payload && errDetails.payload.message) || '';

			if (errDetails.err.status == '400' && errDetails.err.message) {
				errorMessage = errDetails.err.error;
      }

			if (errorMessage) {
				this.snackbar.open(errorMessage, 'Close', { duration: 5000 });
			}
			return new errorActions.ErrorHandled();
		})
	);

	constructor(private actions$: Actions, private snackbar: MatSnackBar) {}
}
