import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderAdminFBComponent } from './header-admin-fb.component';

describe('HeaderAdminFBComponent', () => {
  let component: HeaderAdminFBComponent;
  let fixture: ComponentFixture<HeaderAdminFBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderAdminFBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderAdminFBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
