import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationSellerComponent } from './preparation-seller.component';

describe('PreparationSellerComponent', () => {
  let component: PreparationSellerComponent;
  let fixture: ComponentFixture<PreparationSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparationSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparationSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
