import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedFeedbackComponent } from './processed-feedback.component';

describe('ProcessedFeedbackComponent', () => {
  let component: ProcessedFeedbackComponent;
  let fixture: ComponentFixture<ProcessedFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessedFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessedFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
