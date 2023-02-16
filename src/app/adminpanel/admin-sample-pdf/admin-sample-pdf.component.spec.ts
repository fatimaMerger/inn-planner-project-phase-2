import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSamplePdfComponent } from './admin-sample-pdf.component';

describe('AdminSamplePdfComponent', () => {
  let component: AdminSamplePdfComponent;
  let fixture: ComponentFixture<AdminSamplePdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSamplePdfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSamplePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
