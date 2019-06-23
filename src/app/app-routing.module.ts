import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './component/todo/todo.component';
import { CustomersComponent } from './component/customers/customers.component';
import { AccountComponent } from './component/account/account.component';
import { AccountFormComponent } from './component/accountForm/accountForm.component';
import { AccountDetailComponent } from './component/account-detail/account-detail.component';
import { PaymentComponent } from './component/payment/payment.component';
import { PaymentDetailComponent } from './component/payment-details/payment-detail.component';
import { PaymentFormComponent } from './component/payment-form/paymentForm.component';

const routes: Routes = [
  {
    path: 'todos',
    component: TodoComponent
  },
  {
    path: 'customers',
    component: CustomersComponent
  },
  {
    path: 'accounts',
    component: AccountComponent
  },
  {
    path: 'accounts/add',
    component: AccountFormComponent
  },
  {
    path: 'accounts/:accountId',
    component: AccountDetailComponent
  },

  {
    path: 'payments',
    component: PaymentComponent
  },
  {
    path: 'payments/add',
    component: PaymentFormComponent
  },
  {
    path: 'payments/:paymentId',
    component: PaymentDetailComponent
  },

 ];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
