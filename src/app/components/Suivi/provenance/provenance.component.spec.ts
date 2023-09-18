import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvenanceComponent } from './provenance.component';

describe('ProvenanceComponent', () => {
  let component: ProvenanceComponent;
  let fixture: ComponentFixture<ProvenanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProvenanceComponent]
    });
    fixture = TestBed.createComponent(ProvenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
