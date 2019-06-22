import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as accountActions from '../../actions/account';
import * as fromRoot from '../../reducers';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-account-form',
  templateUrl: './accountForm.component.html',
  styleUrls: ['./accountForm.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountFormComponent implements OnInit {
  accountForm = new FormGroup({
    accountDescription: new FormControl('',[Validators.required]),
    accountHolderName: new FormControl('',[ Validators.required]),
    accountHolderPhoneNumber: new FormControl('',[Validators.required]),
    accountNumber: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(public store: Store<fromRoot.State>, private fb: FormBuilder) {

  }

  ngOnInit() {
    // this.store.dispatch(new accountActions.AccountsFetchAction());
    // is Create or edit form
  }

  onSubmit() {
    this.store.dispatch(new accountActions.AccountAddAction(this.accountForm.value))
  }
}
