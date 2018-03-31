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
import { UserService } from '../../shared/services/user.service';
import { Router } from '@angular/router';
let FacebookLoginComponent = class FacebookLoginComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
        if (window.addEventListener) {
            window.addEventListener("message", this.handleMessage.bind(this), false);
        }
        else {
            window.attachEvent("onmessage", this.handleMessage.bind(this));
        }
    }
    launchFbLogin() {
        this.authWindow = window.open('https://www.facebook.com/v2.11/dialog/oauth?&response_type=token&display=popup&client_id=1528751870549294&display=popup&redirect_uri=http://localhost:5000/facebook-auth.html&scope=email', null, 'width=600,height=400');
    }
    handleMessage(event) {
        const message = event;
        // Only trust messages from the below origin.
        if (message.origin !== "http://localhost:5000")
            return;
        this.authWindow.close();
        const result = JSON.parse(message.data);
        if (!result.status) {
            this.failed = true;
            this.error = result.error;
            this.errorDescription = result.errorDescription;
        }
        else {
            this.failed = false;
            this.isRequesting = true;
            this.userService.facebookLogin(result.accessToken)
                .finally(() => this.isRequesting = false)
                .subscribe(result => {
                if (result) {
                    this.router.navigate(['/dashboard/home']);
                }
            }, error => {
                this.failed = true;
                this.error = error;
            });
        }
    }
};
FacebookLoginComponent = __decorate([
    Component({
        selector: 'app-facebook-login',
        templateUrl: './facebook-login.component.html',
        styleUrls: ['./facebook-login.component.scss']
    }),
    __metadata("design:paramtypes", [UserService, Router])
], FacebookLoginComponent);
export { FacebookLoginComponent };
//# sourceMappingURL=facebook-login.component.js.map