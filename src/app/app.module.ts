import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/index';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { CurrencyEffects } from './effects/currencyEffects';
import { AccountEffects } from './effects/accountEffects';
import { ErrorEffects } from './effects/errorEffects';
import { CurrencyService } from './services/currency.service';
import { TodoComponent } from './component/todo/todo.component';
import { NavigationsComponent } from './component/navigations/navigations.component';
import { CustomersComponent } from './component/customers/customers.component';
import { AccountComponent } from './component/account/account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from './materialUi.module';
import { AccountService } from './services/account.service';
import { AccountFormComponent } from './component/accountForm/accountForm.component';
import { FormErrorComponent } from './component/common/form-error/form-error.component';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AccountDetailComponent } from './component/account-detail/account-detail.component';
import { PaymentEffects } from './effects/paymentEffects';
import { PaymentComponent } from './component/payment/payment.component';
import { PaymentDetailComponent } from './component/payment-details/payment-detail.component';
import { PaymentFormComponent } from './component/payment-form/paymentForm.component';
import { CardComponent } from './component/common/card/card.component';
import { environment } from 'src/environments/environment';

@NgModule({
	declarations: [
		AppComponent,
		TodoComponent,
		NavigationsComponent,
		CustomersComponent,
		AccountComponent,
		AccountFormComponent,
		FormErrorComponent,
		AccountDetailComponent,
		PaymentComponent,
		PaymentDetailComponent,
		PaymentFormComponent,
		CardComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		EffectsModule.forRoot([ CurrencyEffects, ErrorEffects, AccountEffects, PaymentEffects ]),
		StoreModule.forRoot(reducers),
		BrowserAnimationsModule,
		MaterialUiModule,
		ReactiveFormsModule,
		StoreRouterConnectingModule.forRoot()
	],
	entryComponents: [ NavigationsComponent ],
	providers: [
		{ provide: 'APP_BASE_URL', useValue: environment.apiUrl },
		CurrencyService,
		AccountService
	],
	bootstrap: [ AppComponent, NavigationsComponent ]
})
export class AppModule {}
