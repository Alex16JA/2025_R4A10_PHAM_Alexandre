import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreServiceComponent } from './titre-service.component';

describe('TitreServiceComponent', () => {
  let component: TitreServiceComponent;
  let fixture: ComponentFixture<TitreServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitreServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TitreServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
