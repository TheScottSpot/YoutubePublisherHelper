import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {OktaAuthModule, OktaCallbackComponent} from '@okta/okta-angular';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AuthService} from './shared/services/auth.service';
import {HeaderComponent} from './shared/header/header.component';
import {AccountComponent} from './account/account.component';
import {UserDetailsComponent} from './account/user-details/user-details.component';
import {UserCatalogComponent} from './account/user-catalog/user-catalog.component';
import {UserLoginComponent} from './shared/shared-account/user-login/user-login.component';
import {UserRegistrationComponent} from './shared/shared-account/user-registration/user-registration.component';

const config = {
  issuer: 'https://dev-125833.oktapreview.com',
  redirectUri: 'http://localhost:5000/implicit/callback',
  clientId: '0oaelbqxlv5NR8AWJ0h7'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AccountComponent,
    UserLoginComponent,
    UserRegistrationComponent,
    UserDetailsComponent,
    UserCatalogComponent
  ],
  imports: [
    OktaAuthModule.initAuth(config),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    AuthService,
    HttpClient,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
