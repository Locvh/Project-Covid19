import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowShopingComponent } from './show-shoping.component';

describe('ShowShopingComponent', () => {
  let component: ShowShopingComponent;
  let fixture: ComponentFixture<ShowShopingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowShopingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowShopingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
