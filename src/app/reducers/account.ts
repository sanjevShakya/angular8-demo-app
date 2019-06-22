import { Account } from '../models/account';
import * as accountActions from '../actions/account';

const initialState = {
	accountList: [],
	currentAccount: {}
};

export function reducer(state = initialState, action) {
	switch (action.type) {
		case accountActions.STORE_ACCOUNTS:
			return { ...state, accountList: action.payload };
    case accountActions.STORE_CURRENT_ACCOUNT:
    console.log('reducer', action)
			return { ...state, currentAccount: action.payload };
		default:
			return state;
	}
}
