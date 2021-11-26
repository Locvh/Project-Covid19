import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackProcessingSellerComponent } from './feedback-processing-seller.component';

describe('FeedbackProcessingSellerComponent', () => {
  let component: FeedbackProcessingSellerComponent;
  let fixture: ComponentFixture<FeedbackProcessingSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackProcessingSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackProcessingSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
