import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishContractComponent } from './finish-contract.component';

describe('FinishContractComponent', () => {
  let component: FinishContractComponent;
  let fixture: ComponentFixture<FinishContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
