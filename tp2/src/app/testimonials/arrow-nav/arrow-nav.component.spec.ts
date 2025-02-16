import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowNavComponent } from './arrow-nav.component';

describe('ArrowNavComponent', () => {
  let component: ArrowNavComponent;
  let fixture: ComponentFixture<ArrowNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrowNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
