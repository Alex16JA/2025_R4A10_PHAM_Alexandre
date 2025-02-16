import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsProfileComponent } from './testimonials-profile.component';

describe('TestimonialsProfileComponent', () => {
  let component: TestimonialsProfileComponent;
  let fixture: ComponentFixture<TestimonialsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialsProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestimonialsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
