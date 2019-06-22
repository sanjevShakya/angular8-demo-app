import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './component/todo/todo.component';
import { CustomersComponent } from './component/customers/customers.component';
import { AccountComponent } from './component/account/account.component';
import { AccountFormComponent } from './component/accountForm/accountForm.component';

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
  }
 ];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
