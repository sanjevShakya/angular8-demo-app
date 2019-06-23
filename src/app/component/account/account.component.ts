import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as accountActions from '../../actions/account';
import * as fromRoot from '../../reducers';
import { Observable } from 'rxjs';
import { Account } from '../../models/account';
import { Router } from '@angular/router';

@Component({
	selector: 'app-account',
	templateUrl: './account.component.html',
	styleUrls: [ './account.component.css' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountComponent implements OnInit {
	public accounts$: Observable<Account[]>;
	constructor(public store: Store<fromRoot.State>, private router: Router) {
		this.accounts$ = store.select(fromRoot.getAccountsState);
  }

  public actionButtonConfig = {
		title: 'Add Account',
		onActionButtonClick: this.addAccount.bind(this),
	};


	public gridHeaders = [
		{
			name: 'sn',
      displayName: 'S/N',
      classes: ['flex-1']
		},
		{
			name: 'accountHolderName',
			displayName: 'Account Holder Name',
      type: 'content',
      classes: ['flex-3']
		},
		{
			name: 'accountNumber',
			displayName: 'Account Number',
      type: 'content',
      classes: ['flex-3']

		},
		{
			name: 'accountHolderPhoneNumber',
			displayName: 'Account Holder Phone Number',
      type: 'content',
      classes: ['flex-3']
		},
		{
			name: 'action',
      displayName: 'Actions',
      classes: ['flex-1']
		}
  ];

	ngOnInit() {
		this.store.dispatch(new accountActions.AccountsFetchAction());
  }

  addAccount() {
    this.router.navigate(['/accounts/add']);
  }

}
