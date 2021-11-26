import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationFeedbackSellerComponent } from './information-feedback-seller.component';

describe('InformationFeedbackSellerComponent', () => {
  let component: InformationFeedbackSellerComponent;
  let fixture: ComponentFixture<InformationFeedbackSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationFeedbackSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationFeedbackSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
