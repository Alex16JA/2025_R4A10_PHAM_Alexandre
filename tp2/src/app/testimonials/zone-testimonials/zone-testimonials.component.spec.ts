import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneTestimonialsComponent } from './zone-testimonials.component';

describe('ZoneTestimonialsComponent', () => {
  let component: ZoneTestimonialsComponent;
  let fixture: ComponentFixture<ZoneTestimonialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZoneTestimonialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ZoneTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
