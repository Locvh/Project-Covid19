import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHistoryAdminComponent } from './view-history-admin.component';

describe('ViewHistoryAdminComponent', () => {
  let component: ViewHistoryAdminComponent;
  let fixture: ComponentFixture<ViewHistoryAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHistoryAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHistoryAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
