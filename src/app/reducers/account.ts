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
      return { ...state, currentAccount: action.payload };
    case accountActions.ADD_ACCOUNTS:
      return state;
		default:
			return state;
	}
}
