import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreTestimonialsComponent } from './titre-testimonials.component';

describe('TitreTestimonialsComponent', () => {
  let component: TitreTestimonialsComponent;
  let fixture: ComponentFixture<TitreTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitreTestimonialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitreTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
