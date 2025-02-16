import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFooterComponent } from './text-footer.component';

describe('TextFooterComponent', () => {
  let component: TextFooterComponent;
  let fixture: ComponentFixture<TextFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TextFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
