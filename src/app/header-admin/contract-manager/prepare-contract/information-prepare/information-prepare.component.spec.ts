import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPrepareComponent } from './information-prepare.component';

describe('InformationPrepareComponent', () => {
  let component: InformationPrepareComponent;
  let fixture: ComponentFixture<InformationPrepareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationPrepareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationPrepareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
