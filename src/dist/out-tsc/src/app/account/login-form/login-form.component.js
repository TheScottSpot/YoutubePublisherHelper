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
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
let LoginFormComponent = class LoginFormComponent {
    constructor(userService, router, activatedRoute) {
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.submitted = false;
        this.credentials = { email: '', password: '' };
    }
    ngOnInit() {
        // subscribe to router event
        this.subscription = this.activatedRoute.queryParams.subscribe((param) => {
            this.brandNew = param['brandNew'];
            this.credentials.email = param['email'];
        });
    }
    ngOnDestroy() {
        // prevent memory leak by unsubscribing
        this.subscription.unsubscribe();
    }
    login({ value, valid }) {
        this.submitted = true;
        this.isRequesting = true;
        this.errors = '';
        if (valid) {
            this.userService.login(value.email, value.password)
                .finally(() => this.isRequesting = false)
                .subscribe(result => {
                if (result) {
                    console.log(result);
                    this.router.navigate(['/dashboard/home']);
                }
            }, error => this.errors = error);
        }
    }
};
LoginFormComponent = __decorate([
    Component({
        selector: 'app-login-form',
        templateUrl: './login-form.component.html',
        styleUrls: ['./login-form.component.scss']
    }),
    __metadata("design:paramtypes", [UserService, Router, ActivatedRoute])
], LoginFormComponent);
export { LoginFormComponent };
//# sourceMappingURL=login-form.component.js.map