import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { HostComponent } from './host/host.component';
import { AppRoutingModule } from './app-routing.module';
import { RadioFormComponent } from './radio-form/radio-form.component';
import { ReusablebuttonComponent } from './components/pages/reusablebutton/reusablebutton.component';
import { ButtonplatformComponent } from './components/pages/buttonplatform/buttonplatform.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    CustomerDetailsComponent,
    AccountDetailsComponent,
    HostComponent,
    RadioFormComponent,
    ReusablebuttonComponent,
    ButtonplatformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
