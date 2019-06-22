import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers/index';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { CurrencyEffects } from './effects/currencyEffects';
import { AccountEffects} from './effects/accountEffects';
import { ErrorEffects } from './effects/errorEffects';
import { CurrencyService } from './services/currency.service';
import { TodoComponent } from './component/todo/todo.component';
import { NavigationsComponent } from './component/navigations/navigations.component';
import { CustomersComponent } from './component/customers/customers.component';
import { AccountComponent } from './component/account/account.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiModule } from './materialUi.module';
import { AccountService } from './services/account.service';

@NgModule({
	declarations: [
		AppComponent,
		TodoComponent,
		NavigationsComponent,
		CustomersComponent,
		AccountComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpClientModule,
		EffectsModule.forRoot([ CurrencyEffects, ErrorEffects, AccountEffects ]),
		StoreModule.forRoot(reducers),
    BrowserAnimationsModule,
    MaterialUiModule

  ],
  entryComponents: [NavigationsComponent],
	providers: [ CurrencyService, AccountService ],
	bootstrap: [ AppComponent, NavigationsComponent ]
})
export class AppModule {}
