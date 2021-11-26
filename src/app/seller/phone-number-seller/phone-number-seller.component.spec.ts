import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberSellerComponent } from './phone-number-seller.component';

describe('PhoneNumberSellerComponent', () => {
  let component: PhoneNumberSellerComponent;
  let fixture: ComponentFixture<PhoneNumberSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneNumberSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNumberSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
