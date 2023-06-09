import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiereDetailsComponent } from './biere-details.component';

describe('BiereDetailsComponent', () => {
    let component: BiereDetailsComponent;
    let fixture: ComponentFixture<BiereDetailsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BiereDetailsComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(BiereDetailsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
