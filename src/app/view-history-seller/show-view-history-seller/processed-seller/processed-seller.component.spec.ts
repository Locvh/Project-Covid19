import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessedSellerComponent } from './processed-seller.component';

describe('ProcessedSellerComponent', () => {
  let component: ProcessedSellerComponent;
  let fixture: ComponentFixture<ProcessedSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessedSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessedSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
