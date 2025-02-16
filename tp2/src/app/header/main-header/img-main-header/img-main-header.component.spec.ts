import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgMainHeaderComponent } from './img-main-header.component';

describe('ImgMainHeaderComponent', () => {
  let component: ImgMainHeaderComponent;
  let fixture: ComponentFixture<ImgMainHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgMainHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgMainHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
