import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenererVoyageComponent } from './generer-voyage.component';

describe('GenererVoyageComponent', () => {
  let component: GenererVoyageComponent;
  let fixture: ComponentFixture<GenererVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenererVoyageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenererVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
