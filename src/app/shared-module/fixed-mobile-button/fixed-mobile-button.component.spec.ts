import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedMobileButtonComponent } from './fixed-mobile-button.component';

describe('FixedMobileButtonComponent', () => {
  let component: FixedMobileButtonComponent;
  let fixture: ComponentFixture<FixedMobileButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedMobileButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixedMobileButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
