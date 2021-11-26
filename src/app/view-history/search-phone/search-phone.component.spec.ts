import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPhoneComponent } from './search-phone.component';

describe('SearchPhoneComponent', () => {
  let component: SearchPhoneComponent;
  let fixture: ComponentFixture<SearchPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
