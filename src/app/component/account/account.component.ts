import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as accountActions from '../../actions/account';
import * as fromRoot from '../../reducers';
import { Observable } from 'rxjs';
import { Account } from '../../models/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountComponent implements OnInit {
  public accounts$: Observable<Account[]>;
  constructor(public store: Store<fromRoot.State>) {
    this.accounts$ = store.select(fromRoot.getAccountsState);
  }

  ngOnInit() {
		this.store.dispatch(new accountActions.AccountsFetchAction());
  }

  editAccount(account:Account) {
    console.log('navigate with', account);
  }
}
