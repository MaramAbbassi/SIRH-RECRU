import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdbcompComponent } from './tdbcomp.component';

describe('TdbcompComponent', () => {
  let component: TdbcompComponent;
  let fixture: ComponentFixture<TdbcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TdbcompComponent]
    });
    fixture = TestBed.createComponent(TdbcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
