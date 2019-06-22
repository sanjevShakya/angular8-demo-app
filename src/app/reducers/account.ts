import { Account } from '../models/account';
import * as accountActions from '../actions/account';

export function reducer(state = [], action) {
	switch (action.type) {
		case accountActions.STORE_ACCOUNTS:
			return action.payload;
		default:
			return state;
	}
}
