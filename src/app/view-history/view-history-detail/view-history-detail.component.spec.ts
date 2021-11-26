import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHistoryDetailComponent } from './view-history-detail.component';

describe('ViewHistoryDetailComponent', () => {
  let component: ViewHistoryDetailComponent;
  let fixture: ComponentFixture<ViewHistoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHistoryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHistoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
