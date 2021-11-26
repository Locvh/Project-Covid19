import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTabComponent } from './show-tab.component';

describe('ShowTabComponent', () => {
  let component: ShowTabComponent;
  let fixture: ComponentFixture<ShowTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
