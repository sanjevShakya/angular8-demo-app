import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as accountActions from '../../actions/account';
import * as fromRoot from '../../reducers';
import { Observable } from 'rxjs';
import { Account } from '../../models/account';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'app-account-detail',
	templateUrl: './account-detail.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountDetailComponent implements OnInit {
	public account$: Observable<Account>;

	constructor(public store: Store<fromRoot.State>, private route: ActivatedRoute, private router: Router) {
		this.account$ = store.select(fromRoot.getCurrentAccountState);
		this.navigateToAccounts = this.navigateToAccounts.bind(this);
	}

	ngOnInit() {
		this.route.paramMap.subscribe((params) => {
			const accountId = params.get('accountId');
			this.store.dispatch(new accountActions.AccountFetchAction(accountId));
		});
	}

	navigateToAccounts() {
		this.router.navigate([ '/accounts' ]);
	}
}
