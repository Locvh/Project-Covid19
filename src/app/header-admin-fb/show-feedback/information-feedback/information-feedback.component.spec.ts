import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationFeedbackComponent } from './information-feedback.component';

describe('InformationFeedbackComponent', () => {
  let component: InformationFeedbackComponent;
  let fixture: ComponentFixture<InformationFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
