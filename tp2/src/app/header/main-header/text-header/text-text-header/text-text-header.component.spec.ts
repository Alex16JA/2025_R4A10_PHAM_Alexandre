import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextTextHeaderComponent } from './text-text-header.component';

describe('TextTextHeaderComponent', () => {
  let component: TextTextHeaderComponent;
  let fixture: ComponentFixture<TextTextHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextTextHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextTextHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
