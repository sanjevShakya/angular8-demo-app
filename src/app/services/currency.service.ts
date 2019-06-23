import { HttpClient } from '@angular/common/http';
import { Currency } from './../models/currency';

import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CurrencyService{
  constructor(private http: HttpClient, @Inject('APP_BASE_URL') private baseUrl: string) {}

  getRates(): Observable<Currency[]> {
    return this.http.get<any>(`${this.baseUrl}/currency`)
  }
}
