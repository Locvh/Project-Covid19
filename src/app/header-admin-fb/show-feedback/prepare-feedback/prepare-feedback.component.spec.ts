import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareFeedbackComponent } from './prepare-feedback.component';

describe('PrepareFeedbackComponent', () => {
  let component: PrepareFeedbackComponent;
  let fixture: ComponentFixture<PrepareFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepareFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepareFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
