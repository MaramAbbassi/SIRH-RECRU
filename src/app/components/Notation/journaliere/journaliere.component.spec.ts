import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournaliereComponent } from './journaliere.component';

describe('JournaliereComponent', () => {
  let component: JournaliereComponent;
  let fixture: ComponentFixture<JournaliereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JournaliereComponent]
    });
    fixture = TestBed.createComponent(JournaliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
