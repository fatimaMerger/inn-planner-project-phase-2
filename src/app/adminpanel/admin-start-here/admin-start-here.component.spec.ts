import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStartHereComponent } from './admin-start-here.component';

describe('AdminStartHereComponent', () => {
  let component: AdminStartHereComponent;
  let fixture: ComponentFixture<AdminStartHereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStartHereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStartHereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
