import { async, TestBed } from '@angular/core/testing';
import { FacebookLoginComponent } from './facebook-login.component';
describe('FacebookLoginComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FacebookLoginComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(FacebookLoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=facebook-login.component.spec.js.map