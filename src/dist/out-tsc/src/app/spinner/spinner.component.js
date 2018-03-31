var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
let SpinnerComponent = class SpinnerComponent {
    constructor() {
        this.isDelayedRunning = false;
        this.delay = 150;
    }
    set isRunning(value) {
        if (!value) {
            this.cancelTimeout();
            this.isDelayedRunning = false;
            return;
        }
        if (this.currentTimeout) {
            return;
        }
        // specify window to side-step conflict with node types: https://github.com/mgechev/angular2-seed/issues/901
        this.currentTimeout = window.setTimeout(() => {
            this.isDelayedRunning = value;
            this.cancelTimeout();
        }, this.delay);
    }
    cancelTimeout() {
        clearTimeout(this.currentTimeout);
        this.currentTimeout = undefined;
    }
    ngOnDestroy() {
        this.cancelTimeout();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], SpinnerComponent.prototype, "delay", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], SpinnerComponent.prototype, "isRunning", null);
SpinnerComponent = __decorate([
    Component({
        selector: 'app-spinner',
        templateUrl: './spinner.component.html',
        styleUrls: ['./spinner.component.scss']
    })
], SpinnerComponent);
export { SpinnerComponent };
//# sourceMappingURL=spinner.component.js.map