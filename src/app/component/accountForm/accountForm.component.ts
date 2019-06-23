import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as accountActions from '../../actions/account';
import * as fromRoot from '../../reducers';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-account-form',
	templateUrl: './accountForm.component.html',
	styleUrls: [ './accountForm.component.css' ],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountFormComponent implements OnInit {
	accountForm = new FormGroup({
		accountDescription: new FormControl(''),
		accountHolderName: new FormControl('', [ Validators.required ]),
		accountHolderPhoneNumber: new FormControl(''),
		accountNumber: new FormControl('', [
			Validators.required,
			Validators.pattern('^[0-9]+$'),
			Validators.minLength(6)
		])
	});

	constructor(public store: Store<fromRoot.State>, private router: Router) {
		this.cancelAddAccount = this.cancelAddAccount.bind(this);
	}

	ngOnInit() {
		// this.store.dispatch(new accountActions.AccountsFetchAction());
		// is Create or edit form
	}

	onSubmit() {
		this.store.dispatch(new accountActions.AccountAddAction(this.accountForm.value));
	}

	getErrorMessage(fieldName) {
		const field = this.accountForm.controls[fieldName];
		if (!field.errors) {
			return '';
		}
		if (field.errors.required) {
			return 'Field value is required';
		}
		if (field.errors.minlength) {
			return `Field must be at least ${field.errors.minlength.requiredLength} characters long.`;
		}

		if (field.errors.pattern && field.errors.pattern.requiredPattern === '^[0-9]+$') {
			return `Field should be a number`;
		}
		return '';
	}

	cancelAddAccount() {
		this.router.navigate([ '/accounts' ]);
	}
}
