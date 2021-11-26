import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishFeedbackComponent } from './finish-feedback.component';

describe('FinishFeedbackComponent', () => {
  let component: FinishFeedbackComponent;
  let fixture: ComponentFixture<FinishFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
