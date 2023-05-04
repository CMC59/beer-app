import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiereFormComponent } from './biere-form.component';

describe('BiereFormComponent', () => {
    let component: BiereFormComponent;
    let fixture: ComponentFixture<BiereFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BiereFormComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(BiereFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
