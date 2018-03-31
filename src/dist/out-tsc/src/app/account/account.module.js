var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/modules/shared.module';
import { UserService } from '../shared/services/user.service';
import { EmailValidator } from '../directives/email.validator.directive';
import { routing } from './account.routing';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';
let AccountModule = class AccountModule {
};
AccountModule = __decorate([
    NgModule({
        imports: [
            CommonModule, FormsModule, routing, SharedModule
        ],
        declarations: [RegistrationFormComponent, EmailValidator, LoginFormComponent, FacebookLoginComponent],
        providers: [UserService]
    })
], AccountModule);
export { AccountModule };
//# sourceMappingURL=account.module.js.map