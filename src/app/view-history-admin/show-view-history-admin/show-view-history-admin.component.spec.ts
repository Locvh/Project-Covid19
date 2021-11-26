import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowViewHistoryAdminComponent } from './show-view-history-admin.component';

describe('ShowViewHistoryAdminComponent', () => {
  let component: ShowViewHistoryAdminComponent;
  let fixture: ComponentFixture<ShowViewHistoryAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowViewHistoryAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowViewHistoryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
