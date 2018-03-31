var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { XHRBackend, BrowserXhr, ResponseOptions, XSRFStrategy } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Injectable } from '@angular/core';
// sweet global way to handle 401s - works in tandem with existing AuthGuard route checks
// http://stackoverflow.com/questions/34934009/handling-401s-globally-with-angular-2
let AuthenticateXHRBackend = class AuthenticateXHRBackend extends XHRBackend {
    constructor(_browserXhr, _baseResponseOptions, _xsrfStrategy) {
        super(_browserXhr, _baseResponseOptions, _xsrfStrategy);
    }
    createConnection(request) {
        let xhrConnection = super.createConnection(request);
        xhrConnection.response = xhrConnection.response.catch((error) => {
            if ((error.status === 401 || error.status === 403) && (window.location.href.match(/\?/g) || []).length < 2) {
                console.log('The authentication session expired or the user is not authorized. Force refresh of the current page.');
                /* Great solution for bundling with Auth Guard!
                1. Auth Guard checks authorized user (e.g. by looking into LocalStorage).
                2. On 401/403 response you clean authorized user for the Guard (e.g. by removing coresponding parameters in LocalStorage).
                3. As at this early stage you can't access the Router for forwarding to the login page,
                4. refreshing the same page will trigger the Guard checks, which will forward you to the login screen */
                localStorage.removeItem('auth_token');
                window.location.href = window.location.href + '?' + new Date().getMilliseconds();
            }
            return Observable.throw(error);
        });
        return xhrConnection;
    }
};
AuthenticateXHRBackend = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [BrowserXhr, ResponseOptions, XSRFStrategy])
], AuthenticateXHRBackend);
export { AuthenticateXHRBackend };
//# sourceMappingURL=authenticate-xhr.backend.js.map