import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowViewHistoryPrepareUserComponent } from './show-view-history-prepare-user.component';

describe('ShowViewHistoryPrepareUserComponent', () => {
  let component: ShowViewHistoryPrepareUserComponent;
  let fixture: ComponentFixture<ShowViewHistoryPrepareUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowViewHistoryPrepareUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowViewHistoryPrepareUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
