import { HttpClient } from '@angular/common/http';
import { Payment } from '../models/payment';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class PaymentService {
	constructor(private http: HttpClient) {}

	fetchPayments(): Observable<Payment[]> {
		return this.http.get<any>('http://localhost:8080/payments-system/payment');
	}

	addPayment(payment): Observable<Payment> {
		return this.http.post<any>('http://localhost:8080/payments-system/payment/add', { ...payment });
  }

  fetchPayment(paymentId): Observable<Payment> {
    console.log('service',paymentId);
    return this.http.get<any>(`http://localhost:8080/payments-system/payment/${paymentId}`);
  }
}
