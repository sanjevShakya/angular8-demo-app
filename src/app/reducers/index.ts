import { Currency } from './../models/currency';
import { Account } from './../models/account';
import { Payment } from './../models/payment';
import * as fromAmount from './amount';
import * as fromCurrency from './currency';
import * as fromAccount from './account';
import * as fromPayment from './payment';
import { routerReducer } from '@ngrx/router-store';

export interface State {
  amount: number,
  accounts: {
    accountList: Account[],
    currentAccount: Account,
  }
  payments: {
    paymentList: Payment[],
    currentPayment: Payment,
  }
  currencies: Currency[]
}

export const reducers = {
  accounts: fromAccount.reducer,
  amount: fromAmount.reducer,
  currencies: fromCurrency.reducer,
  router: routerReducer,
  payments: fromPayment.reducer
}

export const getAmountState =(state: State) => state.amount;
export const getCurrencyRates = (state: State) => state.currencies;
export const getAccountsState = (state: State) => state.accounts.accountList;
export const getCurrentAccountState = (state: State) => state.accounts.currentAccount;
export const getPaymentsState = (state: State) => state.payments.paymentList;
export const getCurrentPaymentState = (state: State) => state.payments.currentPayment;
