import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgTestimonialsComponent } from './img-testimonials.component';

describe('ImgTestimonialsComponent', () => {
  let component: ImgTestimonialsComponent;
  let fixture: ComponentFixture<ImgTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgTestimonialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
