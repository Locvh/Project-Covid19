import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackDoneSellerComponent } from './feedback-done-seller.component';

describe('FeedbackDoneSellerComponent', () => {
  let component: FeedbackDoneSellerComponent;
  let fixture: ComponentFixture<FeedbackDoneSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackDoneSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackDoneSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
