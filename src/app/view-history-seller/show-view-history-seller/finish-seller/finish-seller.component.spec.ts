import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishSellerComponent } from './finish-seller.component';

describe('FinishSellerComponent', () => {
  let component: FinishSellerComponent;
  let fixture: ComponentFixture<FinishSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
