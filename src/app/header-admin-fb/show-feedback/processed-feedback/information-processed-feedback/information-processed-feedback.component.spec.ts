import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationProcessedFeedbackComponent } from './information-processed-feedback.component';

describe('InformationProcessedFeedbackComponent', () => {
  let component: InformationProcessedFeedbackComponent;
  let fixture: ComponentFixture<InformationProcessedFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationProcessedFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationProcessedFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
