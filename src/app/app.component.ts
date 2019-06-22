import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers';
import { AmountChangeAction } from './actions/amount';

import { Observable } from 'rxjs';
import { Currency } from './models/currency';
import { CurrenciesUpdateAction } from './actions/currency';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
	public amount$: Observable<number>;
	public currencyRates$: Observable<Currency[]>;

	title = 'currency-conversion';
	constructor(public store: Store<fromRoot.State>) {
		this.amount$ = store.select(fromRoot.getAmountState);
		this.currencyRates$ = store.select(fromRoot.getCurrencyRates);
	}

	// Dispatch the Action
	ngOnInit() {
		this.store.dispatch(new CurrenciesUpdateAction());
	}

	onAmountChange(amount: string) {
		const amt = parseFloat(amount);
		if (!isNaN(amt)) {
			this.store.dispatch(new AmountChangeAction(amt));
		}
	}
}
