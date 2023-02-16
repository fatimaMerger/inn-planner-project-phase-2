import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyperwritterComponent } from './typerwritter.component';

describe('TyperwritterComponent', () => {
  let component: TyperwritterComponent;
  let fixture: ComponentFixture<TyperwritterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyperwritterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TyperwritterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
