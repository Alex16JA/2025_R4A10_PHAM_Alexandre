import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnSupprimerComponent } from './btn-supprimer.component';

describe('BtnSupprimerComponent', () => {
  let component: BtnSupprimerComponent;
  let fixture: ComponentFixture<BtnSupprimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnSupprimerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BtnSupprimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
