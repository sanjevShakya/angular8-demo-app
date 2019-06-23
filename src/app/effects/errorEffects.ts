
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';

import * as errorActions from '../actions/error';

@Injectable()
export class ErrorEffects {
	@Effect()
	update$: Observable<Action> = this.actions$.pipe(
		ofType(errorActions.HANDLE_ERROR),
    map((errDetails) => {
      return new errorActions.ErrorHandled();
    })
	);

	constructor( private actions$: Actions) {}
}
