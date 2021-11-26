import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewListSellerComponent } from './view-list-seller.component';

describe('ViewListSellerComponent', () => {
  let component: ViewListSellerComponent;
  let fixture: ComponentFixture<ViewListSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewListSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewListSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
