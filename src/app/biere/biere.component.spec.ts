import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiereComponent } from './biere.component';

describe('BiereComponent', () => {
    let component: BiereComponent;
    let fixture: ComponentFixture<BiereComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BiereComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(BiereComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
