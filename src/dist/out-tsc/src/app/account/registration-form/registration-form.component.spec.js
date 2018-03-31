import { async, TestBed } from '@angular/core/testing';
import { RegistrationFormComponent } from './registration-form.component';
describe('RegistrationFormComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [RegistrationFormComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(RegistrationFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=registration-form.component.spec.js.map