var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from '../models/user.model';
let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.baseUrl = environment.baseUrl;
    }
    getAuthHeader() {
        const header = new HttpHeaders().set('authorization', `Bearer ${localStorage.getItem('access_token')}`);
        return header;
    }
    isLoggedIn() {
        return localStorage.getItem('access_token') !== null;
    }
    register(value) {
        const user = Object.assign(new User(), value);
        return this.http.post(this.baseUrl + '/accounts', user, { headers: this.getAuthHeader() });
    }
    login(email, password) {
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        const body = { email, password };
        this.http.post(this.baseUrl + '/auth/login', body, { headers: headers })
            .subscribe(authToken => {
            console.log(authToken);
        });
    }
    logout() {
        localStorage.removeItem('auth_token');
    }
};
AuthService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [HttpClient])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map