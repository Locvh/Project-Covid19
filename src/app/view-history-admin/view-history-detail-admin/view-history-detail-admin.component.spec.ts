import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHistoryDetailAdminComponent } from './view-history-detail-admin.component';

describe('ViewHistoryDetailAdminComponent', () => {
  let component: ViewHistoryDetailAdminComponent;
  let fixture: ComponentFixture<ViewHistoryDetailAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHistoryDetailAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHistoryDetailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
