import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowViewHistoryProcessedUserComponent } from './show-view-history-processed-user.component';

describe('ShowViewHistoryProcessedUserComponent', () => {
  let component: ShowViewHistoryProcessedUserComponent;
  let fixture: ComponentFixture<ShowViewHistoryProcessedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowViewHistoryProcessedUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowViewHistoryProcessedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
