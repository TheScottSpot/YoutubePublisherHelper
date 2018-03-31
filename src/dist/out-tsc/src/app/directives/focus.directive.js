var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Renderer } from "@angular/core";
let myFocus = class myFocus {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        // focus won't work at construction time - too early
    }
    ngOnInit() {
        this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
    }
};
myFocus = __decorate([
    Directive({ selector: '[tmFocus]' }),
    __metadata("design:paramtypes", [ElementRef, Renderer])
], myFocus);
export { myFocus };
//# sourceMappingURL=focus.directive.js.map