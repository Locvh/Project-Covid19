import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFeedbackSellerComponent } from './show-feedback-seller.component';

describe('ShowFeedbackSellerComponent', () => {
  let component: ShowFeedbackSellerComponent;
  let fixture: ComponentFixture<ShowFeedbackSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFeedbackSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFeedbackSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
