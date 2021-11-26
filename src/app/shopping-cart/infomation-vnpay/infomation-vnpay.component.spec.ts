import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfomationVnpayComponent } from './infomation-vnpay.component';

describe('InfomationVnpayComponent', () => {
  let component: InfomationVnpayComponent;
  let fixture: ComponentFixture<InfomationVnpayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfomationVnpayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfomationVnpayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
