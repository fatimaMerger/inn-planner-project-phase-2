import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDisclosureComponent } from './admin-disclosure.component';

describe('AdminDisclosureComponent', () => {
  let component: AdminDisclosureComponent;
  let fixture: ComponentFixture<AdminDisclosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDisclosureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDisclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
