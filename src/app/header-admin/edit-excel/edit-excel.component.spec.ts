import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExcelComponent } from './edit-excel.component';

describe('EditExcelComponent', () => {
  let component: EditExcelComponent;
  let fixture: ComponentFixture<EditExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
