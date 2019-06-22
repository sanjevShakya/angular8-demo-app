import { Currency } from './../models/currency';
import { Action } from '@ngrx/store';

export const CURRENCIES_UPDATE = '[Currency] UpdateAll';
export const CURRENCIES_UPDATED = '[Currency] UpdatedAll';

export class CurrenciesUpdateAction implements Action {
  type = CURRENCIES_UPDATE
}

export class CurrenciesUpdatedAction implements Action {
  type = CURRENCIES_UPDATED

  constructor(public payload: Currency[]) {}
}
