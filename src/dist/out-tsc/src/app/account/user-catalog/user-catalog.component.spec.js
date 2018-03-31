import { async, TestBed } from '@angular/core/testing';
import { UserCatalogComponent } from './user-catalog.component';
describe('UserCatalogComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserCatalogComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(UserCatalogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=user-catalog.component.spec.js.map