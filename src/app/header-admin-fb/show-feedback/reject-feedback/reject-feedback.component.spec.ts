import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectFeedbackComponent } from './reject-feedback.component';

describe('RejectFeedbackComponent', () => {
  let component: RejectFeedbackComponent;
  let fixture: ComponentFixture<RejectFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
