import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintestimonialsComponent } from './admintestimonials.component';

describe('AdmintestimonialsComponent', () => {
  let component: AdmintestimonialsComponent;
  let fixture: ComponentFixture<AdmintestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmintestimonialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmintestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
