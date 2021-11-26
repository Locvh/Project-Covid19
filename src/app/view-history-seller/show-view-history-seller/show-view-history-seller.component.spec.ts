import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowViewHistorySellerComponent } from './show-view-history-seller.component';

describe('ShowViewHistorySellerComponent', () => {
  let component: ShowViewHistorySellerComponent;
  let fixture: ComponentFixture<ShowViewHistorySellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowViewHistorySellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowViewHistorySellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
