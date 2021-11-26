import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowViewHistoryFeedbackUserComponent } from './show-view-history-feedback-user.component';

describe('ShowViewHistoryFeedbackUserComponent', () => {
  let component: ShowViewHistoryFeedbackUserComponent;
  let fixture: ComponentFixture<ShowViewHistoryFeedbackUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowViewHistoryFeedbackUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowViewHistoryFeedbackUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
