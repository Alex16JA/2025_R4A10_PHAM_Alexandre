import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextServiceComponent } from './text-service.component';

describe('TextServiceComponent', () => {
  let component: TextServiceComponent;
  let fixture: ComponentFixture<TextServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
