import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTabSellerComponent } from './show-tab-seller.component';

describe('ShowTabSellerComponent', () => {
  let component: ShowTabSellerComponent;
  let fixture: ComponentFixture<ShowTabSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTabSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTabSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
