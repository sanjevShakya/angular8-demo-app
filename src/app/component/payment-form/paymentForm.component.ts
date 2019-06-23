import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as paymentActions from '../../actions/payment';
import * as accountActions from '../../actions/account';
import * as fromRoot from '../../reducers';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable, pipe } from 'rxjs';
import { Account } from '../../models/account';
import { startWith, map, filter } from 'rxjs/operators';
import { ValueTransformer } from '@angular/compiler/src/util';
import { Currency } from 'src/app/models/currency';

@Component({
	selector: 'app-payment-form',
	templateUrl: './paymentForm.component.html',
	styleUrls: [ './paymentForm.component.css' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentFormComponent implements OnInit {
	paymentForm = new FormGroup({
		amount: new FormControl('', [ Validators.required ]),
		currencyCode: new FormControl('', [ Validators.required ]),
		destinationAccountNumber: new FormControl('', [ Validators.required ]),
		paymentDescription: new FormControl('', []),
		sourceAccountNumber: new FormControl('', [ Validators.required ])
  });

  filteredOptions: Observable<string[]>;

	public accounts$: Observable<Account[]>;
  public filteredAccounts: Observable<Account[]>;
  public filteredCurrencyCodes: Observable<Account[]>;
  public currencyCodes$: Observable<Currency[]>;
  public filteredDestinationAccounts: Observable<Account[]>;

	constructor(public store: Store<fromRoot.State>, private fb: FormBuilder) {
    this.accounts$ = store.select(fromRoot.getAccountsState);
    this.currencyCodes$ = store.select(fromRoot.getCurrencyRates);
	}

	ngOnInit() {
		// this.store.dispatch(new paymentActions.PaymentsFetchAction());
		// is Create or edit form
		this.store.dispatch(new accountActions.AccountsFetchAction());

    this.accounts$.subscribe(accounts => {
      this.filteredAccounts = this.paymentForm.get('sourceAccountNumber').valueChanges.pipe(
        startWith(''),
        map((value) => {
          const filterValue = value.toString().toLowerCase();

          return accounts.filter(account => account.accountNumber.toString().indexOf(filterValue) === 0 || account.accountHolderName.toString().indexOf(filterValue) === 0);
        })
      );

      this.filteredDestinationAccounts = this.paymentForm.get('destinationAccountNumber').valueChanges.pipe(
        startWith(''),
        map((value) => {
          const filterValue = value.toString().toLowerCase();

          return accounts.filter(account => account.accountNumber.toString().indexOf(filterValue) === 0 || account.accountHolderName.toString().indexOf(filterValue) === 0);
        })
      );
    })
	}

	onSubmit() {
		this.store.dispatch(new paymentActions.PaymentAddAction(this.paymentForm.value));
	}
}
