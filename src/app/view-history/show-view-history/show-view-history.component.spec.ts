import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowViewHistoryComponent } from './show-view-history.component';

describe('ShowViewHistoryComponent', () => {
  let component: ShowViewHistoryComponent;
  let fixture: ComponentFixture<ShowViewHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowViewHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowViewHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
