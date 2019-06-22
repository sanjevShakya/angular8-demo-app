import { Action } from '@ngrx/store';
import { Account } from '../models/account';

export const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS';
export const FETCH_ACCOUNT_BY_ID='FETCH_ACCOUNT_BY_ID';
export const ADD_ACCOUNTS = 'ADD_ACCOUNTS';
export const STORE_ACCOUNTS = 'STORE_ACCOUNTS';
export const STORE_CURRENT_ACCOUNT = 'STORE_CURRENT_ACCOUNT';

export class AccountsFetchAction implements Action {
  type = FETCH_ACCOUNTS
}

export class AccountFetchAction implements Action {
  type=FETCH_ACCOUNT_BY_ID;

  constructor(public payload: String) {}
}

export class AccountsStoreAction implements Action {
  type = STORE_ACCOUNTS

  constructor(public payload:Account[]) {}
}


export class AccountAddAction implements Action {
  type = ADD_ACCOUNTS;

  constructor(public payload:Account) {}
}

export class StoreCurrentAccount implements Action {
  type = STORE_CURRENT_ACCOUNT;

  constructor(public payload: Account) {}
}


