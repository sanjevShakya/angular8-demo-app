import { Action } from '@ngrx/store';

export const HANDLE_ERROR = '[ERROR] HANDLE';
export const HANDLED_ERROR = '[ERROR] HANDLED';

export class ErrorAction implements Action {
  type = HANDLE_ERROR

  constructor(public err: object, public payload:object){}
}

export class ErrorHandled implements Action {
  type = HANDLED_ERROR
}
