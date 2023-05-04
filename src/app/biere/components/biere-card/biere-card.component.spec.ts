import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiereCardComponent } from './biere-card.component';

describe('BiereCardComponent', () => {
    let component: BiereCardComponent;
    let fixture: ComponentFixture<BiereCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BiereCardComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(BiereCardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
