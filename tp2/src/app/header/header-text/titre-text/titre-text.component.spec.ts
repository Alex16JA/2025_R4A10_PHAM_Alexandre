import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreTextComponent } from './titre-text.component';

describe('TitreTextComponent', () => {
  let component: TitreTextComponent;
  let fixture: ComponentFixture<TitreTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitreTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitreTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
