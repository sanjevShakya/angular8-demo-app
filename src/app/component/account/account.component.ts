import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as accountActions from '../../actions/account';
import * as fromRoot from '../../reducers';
import { Observable } from 'rxjs';
import { Account } from '../../models/account';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { startWith, map, filter } from 'rxjs/operators';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: [ './account.component.css' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountComponent implements OnInit {
	public accounts$: Observable<Account[]>;
	searchText = new FormControl('');
	public filteredAccounts$: Observable<Account[]>;

	constructor(public store: Store<fromRoot.State>, private router: Router) {
    this.accounts$ = store.select(fromRoot.getAccountsState);
	}

	public actionButtonConfig = {
		title: 'Add Account',
		onActionButtonClick: this.addAccount.bind(this)
	};

	public gridHeaders = [
		{
			name: 'sn',
			displayName: 'S/N',
			classes: [ 'flex-1' ]
		},
		{
			name: 'accountHolderName',
			displayName: 'Account Holder Name',
			type: 'content',
			classes: [ 'flex-3' ]
		},
		{
			name: 'accountNumber',
			displayName: 'Account Number',
			type: 'content',
			classes: [ 'flex-3' ]
		},
		{
			name: 'accountHolderPhoneNumber',
			displayName: 'Phone Number',
			type: 'content',
			classes: [ 'flex-3' ]
		},
		{
			name: 'action',
			displayName: 'Actions',
			classes: [ 'flex-1' ]
		}
	];

	ngOnInit() {
		this.store.dispatch(new accountActions.AccountsFetchAction());

		this.accounts$.subscribe((accounts) => {
			this.filteredAccounts$ = this.searchText.valueChanges.pipe(
				startWith(''),
				map((value = '') => {
          const filterValue = value.toString().toLowerCase();
					return accounts.filter(
						(account) =>
							account.accountNumber.toString().toLowerCase().indexOf(filterValue) === 0 ||
							account.accountHolderName.toString().toLowerCase().indexOf(filterValue) === 0
					);
				})
      );
		});
	}

	addAccount() {
		this.router.navigate([ '/accounts/add' ]);
	}
}
