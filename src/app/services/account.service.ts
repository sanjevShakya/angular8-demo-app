import { HttpClient } from '@angular/common/http';
import { Account } from '../models/account';

import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AccountService {
	constructor(private http: HttpClient, @Inject('APP_BASE_URL') private baseUrl: string) {
  }

	fetchAccounts(): Observable<Account[]> {
		return this.http.get<any>(`${this.baseUrl}/account`);
	}

	addAccount(account): Observable<Account> {
		return this.http.post<any>(`${this.baseUrl}/account/add`, { ...account });
  }

  fetchAccount(accountId): Observable<Account> {
    return this.http.get<any>(`${this.baseUrl}/account/${accountId}`);
  }
}
