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
import { Http, Headers } from '@angular/http';
import { ConfigService } from '../../shared/utils/config.service';
import { BaseService } from '../../shared/services/base.service';
// Add the RxJS Observable operators we need in this app.
import '../../rxjs-operators';
let DashboardService = class DashboardService extends BaseService {
    constructor(http, configService) {
        super();
        this.http = http;
        this.configService = configService;
        this.baseUrl = '';
        this.baseUrl = configService.getApiURI();
    }
    getHomeDetails() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let authToken = localStorage.getItem('auth_token');
        headers.append('Authorization', `Bearer ${authToken}`);
        return this.http.get(this.baseUrl + "/dashboard/home", { headers })
            .map(response => response.json())
            .catch(this.handleError);
    }
};
DashboardService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, ConfigService])
], DashboardService);
export { DashboardService };
//# sourceMappingURL=dashboard.service.js.map