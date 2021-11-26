import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofirmInfomationComponent } from './cofirm-infomation.component';

describe('CofirmInfomationComponent', () => {
  let component: CofirmInfomationComponent;
  let fixture: ComponentFixture<CofirmInfomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CofirmInfomationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CofirmInfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
