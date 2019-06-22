import { Currency } from './../models/currency';
import { Account } from './../models/account';
import * as fromAmount from './amount';
import * as fromCurrency from './currency';

export interface State {
  amount: number,
  accounts: Account[]
  currencies: Currency[]
}

export const reducers = {
  accounts: fromAmount.reducer,
  amount: fromAmount.reducer,
  currencies: fromCurrency.reducer
}

export const getAmountState =(state: State) => state.amount;
export const getCurrencyRates = (state: State) => state.currencies;
export const getAccountsState = (state: State) => state.accounts;
