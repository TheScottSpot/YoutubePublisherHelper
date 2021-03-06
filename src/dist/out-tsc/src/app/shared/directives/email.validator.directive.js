var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS } from '@angular/forms';
function validateEmailFactory() {
    return (c) => {
        let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return EMAIL_REGEXP.test(c.value) ? null : {
            validateEmail: {
                valid: false
            }
        };
    };
}
let EmailValidator = EmailValidator_1 = class EmailValidator {
    constructor() {
        this.validator = validateEmailFactory();
    }
    validate(c) {
        return this.validator(c);
    }
};
EmailValidator = EmailValidator_1 = __decorate([
    Directive({
        selector: '[validateEmail][ngModel],[validateEmail][formControl]',
        providers: [
            { provide: NG_VALIDATORS, useExisting: forwardRef(() => EmailValidator_1), multi: true }
        ]
    }),
    __metadata("design:paramtypes", [])
], EmailValidator);
export { EmailValidator };
var EmailValidator_1;
//# sourceMappingURL=email.validator.directive.js.map