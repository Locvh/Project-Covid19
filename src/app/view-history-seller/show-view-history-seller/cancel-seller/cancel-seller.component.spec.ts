import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelSellerComponent } from './cancel-seller.component';

describe('CancelSellerComponent', () => {
  let component: CancelSellerComponent;
  let fixture: ComponentFixture<CancelSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
