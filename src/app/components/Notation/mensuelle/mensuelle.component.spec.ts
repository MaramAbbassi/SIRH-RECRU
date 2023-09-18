import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensuelleComponent } from './mensuelle.component';

describe('MensuelleComponent', () => {
  let component: MensuelleComponent;
  let fixture: ComponentFixture<MensuelleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MensuelleComponent]
    });
    fixture = TestBed.createComponent(MensuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
