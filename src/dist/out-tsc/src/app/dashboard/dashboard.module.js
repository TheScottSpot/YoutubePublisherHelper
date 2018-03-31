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
import { routing } from './dashboard.routing';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { DashboardService } from './services/dashboard.service';
import { AuthGuard } from '../auth.guard';
import { SettingsComponent } from './settings/settings.component';
let DashboardModule = class DashboardModule {
};
DashboardModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            FormsModule,
            routing,
            SharedModule
        ],
        declarations: [RootComponent, HomeComponent, SettingsComponent],
        exports: [],
        providers: [AuthGuard, DashboardService]
    })
], DashboardModule);
export { DashboardModule };
//# sourceMappingURL=dashboard.module.js.map