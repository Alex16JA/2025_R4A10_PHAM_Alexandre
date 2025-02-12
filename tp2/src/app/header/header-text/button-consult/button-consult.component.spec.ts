import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonConsultComponent } from './button-consult.component';

describe('ButtonConsultComponent', () => {
  let component: ButtonConsultComponent;
  let fixture: ComponentFixture<ButtonConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonConsultComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
