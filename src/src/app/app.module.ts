import {BrowserModule} from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {routing} from './app.routing';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {AuthService} from './shared/services/auth.service';
import {HeaderComponent} from './shared/header/header.component';
import {AccountComponent} from './account/account.component';
import {UserDetailsComponent} from './account/user-details/user-details.component';
import {UserCatalogComponent} from './account/user-catalog/user-catalog.component';
import {UserLoginComponent} from './shared/shared-account/user-login/user-login.component';
import {UserRegistrationComponent} from './shared/shared-account/user-registration/user-registration.component';
import {MyHttpInterceptor} from './shared/http-interceptor';

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
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyHttpInterceptor,
      multi: true
    },
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
