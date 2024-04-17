import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonBackToTopComponent } from './button-back-to-top.component';

describe('ButtonBackToTopComponent', () => {
  let component: ButtonBackToTopComponent;
  let fixture: ComponentFixture<ButtonBackToTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonBackToTopComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonBackToTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
