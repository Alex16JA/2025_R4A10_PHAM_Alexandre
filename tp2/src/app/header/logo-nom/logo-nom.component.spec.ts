import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoNomComponent } from './logo-nom.component';

describe('LogoNomComponent', () => {
  let component: LogoNomComponent;
  let fixture: ComponentFixture<LogoNomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoNomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoNomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
