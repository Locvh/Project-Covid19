import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePromotionComponent } from './choose-promotion.component';

describe('ChoosePromotionComponent', () => {
  let component: ChoosePromotionComponent;
  let fixture: ComponentFixture<ChoosePromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosePromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosePromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
