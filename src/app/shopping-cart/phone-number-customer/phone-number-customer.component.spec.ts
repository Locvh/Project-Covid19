import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneNumberCustomerComponent } from './phone-number-customer.component';

describe('PhoneNumberCustomerComponent', () => {
  let component: PhoneNumberCustomerComponent;
  let fixture: ComponentFixture<PhoneNumberCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneNumberCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneNumberCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
