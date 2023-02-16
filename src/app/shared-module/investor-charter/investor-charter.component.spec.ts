import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorCharterComponent } from './investor-charter.component';

describe('InvestorCharterComponent', () => {
  let component: InvestorCharterComponent;
  let fixture: ComponentFixture<InvestorCharterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorCharterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorCharterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
