import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHistorySellerComponent } from './view-history-seller.component';

describe('ViewHistorySellerComponent', () => {
  let component: ViewHistorySellerComponent;
  let fixture: ComponentFixture<ViewHistorySellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewHistorySellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHistorySellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
