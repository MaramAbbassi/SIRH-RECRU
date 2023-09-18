import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuelleComponent } from './annuelle.component';

describe('AnnuelleComponent', () => {
  let component: AnnuelleComponent;
  let fixture: ComponentFixture<AnnuelleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnnuelleComponent]
    });
    fixture = TestBed.createComponent(AnnuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
