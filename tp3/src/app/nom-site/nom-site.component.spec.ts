import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomSiteComponent } from './nom-site.component';

describe('NomSiteComponent', () => {
  let component: NomSiteComponent;
  let fixture: ComponentFixture<NomSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NomSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NomSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
