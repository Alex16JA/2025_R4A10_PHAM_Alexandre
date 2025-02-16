import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomLogoFooterComponent } from './nom-logo-footer.component';

describe('NomLogoFooterComponent', () => {
  let component: NomLogoFooterComponent;
  let fixture: ComponentFixture<NomLogoFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NomLogoFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NomLogoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
