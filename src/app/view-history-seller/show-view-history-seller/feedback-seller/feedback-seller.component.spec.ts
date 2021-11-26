import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackSellerComponent } from './feedback-seller.component';

describe('FeedbackSellerComponent', () => {
  let component: FeedbackSellerComponent;
  let fixture: ComponentFixture<FeedbackSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
