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
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
let RegistrationFormComponent = class RegistrationFormComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.submitted = false;
    }
    ngOnInit() {
    }
    registerUser({ value, valid }) {
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.register(value.email, value.password, value.firstName, value.lastName, value.location)
                .finally(() => this.isRequesting = false)
                .subscribe(result => {
                if (result) {
                    this.router.navigate(['/login'], { queryParams: { brandNew: true, email: value.email } });
                }
            }, errors => this.errors = errors);
        }
    }
};
RegistrationFormComponent = __decorate([
    Component({
        selector: 'app-registration-form',
        templateUrl: './registration-form.component.html',
        styleUrls: ['./registration-form.component.scss']
    }),
    __metadata("design:paramtypes", [UserService, Router])
], RegistrationFormComponent);
export { RegistrationFormComponent };
//# sourceMappingURL=registration-form.component.js.map