import { Action } from '@ngrx/store';
import { Payment } from '../models/payment';

export const FETCH_PAYMENTS = 'FETCH_PAYMENTS';
export const FETCH_PAYMENT_BY_ID='FETCH_PAYMENT_BY_ID';
export const ADD_PAYMENTS = 'ADD_PAYMENTS';
export const STORE_PAYMENTS = 'STORE_PAYMENTS';
export const STORE_CURRENT_PAYMENT = 'STORE_CURRENT_PAYMENT';

export class PaymentsFetchAction implements Action {
  type = FETCH_PAYMENTS
}

export class PaymentFetchAction implements Action {
  type=FETCH_PAYMENT_BY_ID;

  constructor(public payload: String) {}
}

export class PaymentsStoreAction implements Action {
  type = STORE_PAYMENTS

  constructor(public payload:Payment[]) {}
}


export class PaymentAddAction implements Action {
  type = ADD_PAYMENTS;

  constructor(public payload:Payment) {}
}

export class StoreCurrentPayment implements Action {
  type = STORE_CURRENT_PAYMENT;

  constructor(public payload: Payment) {}
}


