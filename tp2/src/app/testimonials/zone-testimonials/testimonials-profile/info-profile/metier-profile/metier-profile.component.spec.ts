import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetierProfileComponent } from './metier-profile.component';

describe('MetierProfileComponent', () => {
  let component: MetierProfileComponent;
  let fixture: ComponentFixture<MetierProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MetierProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetierProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
