import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectContractComponent } from './reject-contract.component';

describe('RejectContractComponent', () => {
  let component: RejectContractComponent;
  let fixture: ComponentFixture<RejectContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RejectContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
