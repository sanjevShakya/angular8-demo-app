import { HttpClient } from '@angular/common/http';
import { Currency } from './../models/currency';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CurrencyService{
  constructor(private http: HttpClient) {}

  getRates(): Observable<Currency[]> {
    return this.http.get<any>('http://localhost:8080/payments-system/currency')
  }
}
