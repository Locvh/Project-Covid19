import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHistoryDetailSellerComponent } from './view-history-detail-seller.component';

describe('ViewHistoryDetailSellerComponent', () => {
  let component: ViewHistoryDetailSellerComponent;
  let fixture: ComponentFixture<ViewHistoryDetailSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHistoryDetailSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHistoryDetailSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
