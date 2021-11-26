import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashReturnComponent } from './cash-return.component';

describe('CashReturnComponent', () => {
  let component: CashReturnComponent;
  let fixture: ComponentFixture<CashReturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashReturnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
