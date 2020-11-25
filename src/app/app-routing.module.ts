import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { LandingComponent } from './components/landing/landing.component';
import { ButtonplatformComponent } from './components/pages/buttonplatform/buttonplatform.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { RadioFormComponent } from './radio-form/radio-form.component';


const routes: Routes = [
  { path:'', component: LandingComponent},
  { path: 'customerdetails', component: CustomerDetailsComponent},
  { path: 'accountdetails', component: AccountDetailsComponent },
  { path: 'radioform',  component: RadioFormComponent},
  { path: 'buttons' , component: ButtonplatformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }