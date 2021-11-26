import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationContractComponent } from './information-contract.component';

describe('InformationContractComponent', () => {
  let component: InformationContractComponent;
  let fixture: ComponentFixture<InformationContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationContractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
