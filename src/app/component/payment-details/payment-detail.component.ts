import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as paymentActions from '../../actions/payment';
import * as fromRoot from '../../reducers';
import { Observable } from 'rxjs';
import { Payment } from '../../models/payment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentDetailComponent implements OnInit {
  public payment$: Observable<Payment>;

  constructor(public store: Store<fromRoot.State>, private route: ActivatedRoute) {
    this.payment$ = store.select(fromRoot.getCurrentPaymentState);

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const paymentId = params.get('paymentId');
      this.store.dispatch(new paymentActions.PaymentFetchAction(paymentId));
    });
  }
}
