import { HttpClient } from '@angular/common/http';
import { Payment } from '../models/payment';

import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PaymentService {
	constructor(private http: HttpClient, @Inject('APP_BASE_URL') private baseUrl: string) {}

	fetchPayments(): Observable<Payment[]> {
		return this.http.get<any>(`${this.baseUrl}/payment`);
	}

	addPayment(payment): Observable<Payment> {
		return this.http.post<any>(`${this.baseUrl}/payment/add`, { ...payment });
  }

  fetchPayment(paymentId): Observable<Payment> {
    return this.http.get<any>(`${this.baseUrl}/payment/${paymentId}`);
  }
}
