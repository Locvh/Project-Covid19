import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeOtpSellerComponent } from './code-otp-seller.component';

describe('CodeOtpSellerComponent', () => {
  let component: CodeOtpSellerComponent;
  let fixture: ComponentFixture<CodeOtpSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeOtpSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeOtpSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
