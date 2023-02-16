import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SEBIDisclosureComponent } from './sebi-disclosure.component';

describe('SEBIDisclosureComponent', () => {
  let component: SEBIDisclosureComponent;
  let fixture: ComponentFixture<SEBIDisclosureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SEBIDisclosureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SEBIDisclosureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
