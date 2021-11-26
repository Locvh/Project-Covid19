import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowShoppingDetailComponent } from './show-shopping-detail.component';

describe('ShowShoppingDetailComponent', () => {
  let component: ShowShoppingDetailComponent;
  let fixture: ComponentFixture<ShowShoppingDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowShoppingDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowShoppingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
