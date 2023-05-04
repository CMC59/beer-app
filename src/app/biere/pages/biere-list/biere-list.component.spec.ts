import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiereListComponent } from './biere-list.component';

describe('BiereListComponent', () => {
    let component: BiereListComponent;
    let fixture: ComponentFixture<BiereListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BiereListComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(BiereListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
