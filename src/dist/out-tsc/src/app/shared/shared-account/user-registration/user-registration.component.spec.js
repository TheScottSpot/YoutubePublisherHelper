import { async, TestBed } from '@angular/core/testing';
import { UserRegistrationComponent } from './user-registration.component';
describe('UserRegistrationComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserRegistrationComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(UserRegistrationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-registration.component.spec.js.map