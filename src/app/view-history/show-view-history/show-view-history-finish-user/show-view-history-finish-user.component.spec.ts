import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowViewHistoryFinishUserComponent } from './show-view-history-finish-user.component';

describe('ShowViewHistoryFinishUserComponent', () => {
  let component: ShowViewHistoryFinishUserComponent;
  let fixture: ComponentFixture<ShowViewHistoryFinishUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowViewHistoryFinishUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowViewHistoryFinishUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
