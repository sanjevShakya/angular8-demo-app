import { Currency } from './../models/currency';
import * as currencyActions from '../actions/currency';

export function reducer(state = [], action: currencyActions.CurrenciesUpdatedAction) {
	switch (action.type) {
		case currencyActions.CURRENCIES_UPDATED:
			return action.payload;
		default:
			return state;
	}
}
