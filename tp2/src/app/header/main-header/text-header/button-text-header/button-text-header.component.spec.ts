import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTextHeaderComponent } from './button-text-header.component';

describe('ButtonTextHeaderComponent', () => {
  let component: ButtonTextHeaderComponent;
  let fixture: ComponentFixture<ButtonTextHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonTextHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonTextHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
