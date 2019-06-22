import { Action } from '@ngrx/store';
import { Account } from '../models/account';

export const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS';
export const STORE_ACCOUNTS = 'STORE_ACCOUNTS';

export class AccountsFetchAction implements Action {
  type = FETCH_ACCOUNTS
}

export class AccountsStoreAction implements Action {
  type = STORE_ACCOUNTS

  constructor(public payload:Account[]) {}
}


