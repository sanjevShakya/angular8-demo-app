import { Currency } from './../models/currency';
import { Account } from './../models/account';
import * as fromAmount from './amount';
import * as fromCurrency from './currency';
import * as fromAccount from './account';
import { routerReducer } from '@ngrx/router-store';

export interface State {
  amount: number,
  accounts: Account[]
  currencies: Currency[]
}

export const reducers = {
  accounts: fromAccount.reducer,
  amount: fromAmount.reducer,
  currencies: fromCurrency.reducer,
  router: routerReducer,
}

export const getAmountState =(state: State) => state.amount;
export const getCurrencyRates = (state: State) => state.currencies;
export const getAccountsState = (state: State) => state.accounts;
