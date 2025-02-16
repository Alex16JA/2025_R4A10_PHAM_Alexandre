import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialsTextComponent } from './testimonials-text.component';

describe('TestimonialsTextComponent', () => {
  let component: TestimonialsTextComponent;
  let fixture: ComponentFixture<TestimonialsTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialsTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TestimonialsTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
