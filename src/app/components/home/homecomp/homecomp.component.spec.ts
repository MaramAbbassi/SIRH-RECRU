import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecompComponent } from './homecomp.component';

describe('HomecompComponent', () => {
  let component: HomecompComponent;
  let fixture: ComponentFixture<HomecompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomecompComponent]
    });
    fixture = TestBed.createComponent(HomecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
