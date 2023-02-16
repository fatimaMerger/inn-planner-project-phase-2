import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlickTestimonialsComponent } from './slick-testimonials.component';

describe('SlickTestimonialsComponent', () => {
  let component: SlickTestimonialsComponent;
  let fixture: ComponentFixture<SlickTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlickTestimonialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlickTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
