import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepareContractComponent } from './prepare-contract.component';

describe('PrepareContractComponent', () => {
  let component: PrepareContractComponent;
  let fixture: ComponentFixture<PrepareContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrepareContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepareContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
