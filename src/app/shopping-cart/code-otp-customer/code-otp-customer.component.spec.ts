import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeOtpCustomerComponent } from './code-otp-customer.component';

describe('CodeOtpCustomerComponent', () => {
  let component: CodeOtpCustomerComponent;
  let fixture: ComponentFixture<CodeOtpCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeOtpCustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeOtpCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
