import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomationPrepareFeedbackComponent } from './infomation-prepare-feedback.component';

describe('InfomationPrepareFeedbackComponent', () => {
  let component: InfomationPrepareFeedbackComponent;
  let fixture: ComponentFixture<InfomationPrepareFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfomationPrepareFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomationPrepareFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
