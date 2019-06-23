import { ActionReducer, Action } from '@ngrx/store';
import * as amountActions from '../actions/amount';

export function reducer(state: number = 1, action: amountActions.AmountChangeAction) {
	switch (action.type) {
		case amountActions.AMOUNT_CHANGE:
			return action.payload;
		default:
			return state;
	}
}
