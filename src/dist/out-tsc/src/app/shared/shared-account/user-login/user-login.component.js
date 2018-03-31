var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { accountConstants } from '../account-constants';
let UserLoginComponent = class UserLoginComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
        this.createForm();
    }
    createForm() {
        this.loginForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required]),
        });
    }
    login() {
        const email = this.loginForm.controls[accountConstants.email].value;
        const password = this.loginForm.controls[accountConstants.password].value;
        this.auth.login(email, password);
    }
};
UserLoginComponent = __decorate([
    Component({
        selector: 'app-user-login',
        templateUrl: './user-login.component.html',
        styleUrls: ['./user-login.component.scss']
    }),
    __metadata("design:paramtypes", [AuthService])
], UserLoginComponent);
export { UserLoginComponent };
//# sourceMappingURL=user-login.component.js.map