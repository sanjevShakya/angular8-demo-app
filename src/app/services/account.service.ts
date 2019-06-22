import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService{
  constructor(private http: HttpClient) {}

  fetchAccounts(): Observable<Account[]> {
    return this.http.get<any>('http://localhost:8080/payments-system/account')
  }
}
