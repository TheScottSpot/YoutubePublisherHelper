var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AuthService } from './shared/services/auth.service';
import { HeaderComponent } from './shared/header/header.component';
import { AccountComponent } from './account/account.component';
import { UserDetailsComponent } from './account/user-details/user-details.component';
import { UserCatalogComponent } from './account/user-catalog/user-catalog.component';
import { UserLoginComponent } from './shared/shared-account/user-login/user-login.component';
import { UserRegistrationComponent } from './shared/shared-account/user-registration/user-registration.component';
import { MaterializeModule } from 'angular-plus-materialize';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
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
            MaterializeModule,
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
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map