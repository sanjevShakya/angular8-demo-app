import { Payment } from '../models/payment';
import * as paymentActions from '../actions/payment';

const initialState = {
	paymentList: [],
	currentPayment: {}
};

export function reducer(state = initialState, action) {
	switch (action.type) {
		case paymentActions.STORE_PAYMENTS:
			return { ...state, paymentList: action.payload };
    case paymentActions.STORE_CURRENT_PAYMENT:
    console.log('reducer', action)
			return { ...state, currentPayment: action.payload };
		default:
			return state;
	}
}
