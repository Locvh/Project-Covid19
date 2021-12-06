import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizedStoreComponent } from './authorized-store.component';

describe('AuthorizedStoreComponent', () => {
  let component: AuthorizedStoreComponent;
  let fixture: ComponentFixture<AuthorizedStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorizedStoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizedStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
