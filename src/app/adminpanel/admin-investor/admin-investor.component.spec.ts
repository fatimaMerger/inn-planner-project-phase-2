import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInvestorComponent } from './admin-investor.component';

describe('AdminInvestorComponent', () => {
  let component: AdminInvestorComponent;
  let fixture: ComponentFixture<AdminInvestorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminInvestorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
