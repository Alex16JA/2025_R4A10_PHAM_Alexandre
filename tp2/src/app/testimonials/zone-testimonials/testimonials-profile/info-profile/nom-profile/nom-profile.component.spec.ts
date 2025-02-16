import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomProfileComponent } from './nom-profile.component';

describe('NomProfileComponent', () => {
  let component: NomProfileComponent;
  let fixture: ComponentFixture<NomProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NomProfileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NomProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
