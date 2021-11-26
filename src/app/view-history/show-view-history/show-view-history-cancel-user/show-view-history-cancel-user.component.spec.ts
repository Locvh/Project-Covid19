import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowViewHistoryCancelUserComponent } from './show-view-history-cancel-user.component';

describe('ShowViewHistoryCancelUserComponent', () => {
  let component: ShowViewHistoryCancelUserComponent;
  let fixture: ComponentFixture<ShowViewHistoryCancelUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowViewHistoryCancelUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowViewHistoryCancelUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
