import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeOtpComponent } from './code-otp.component';

describe('CodeOtpComponent', () => {
  let component: CodeOtpComponent;
  let fixture: ComponentFixture<CodeOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeOtpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
