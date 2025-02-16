import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreTextHeaderComponent } from './titre-text-header.component';

describe('TitreTextHeaderComponent', () => {
  let component: TitreTextHeaderComponent;
  let fixture: ComponentFixture<TitreTextHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitreTextHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitreTextHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
