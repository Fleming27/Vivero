import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuculentasComponent } from './suculentas.component';

describe('SuculentasComponent', () => {
  let component: SuculentasComponent;
  let fixture: ComponentFixture<SuculentasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuculentasComponent]
    });
    fixture = TestBed.createComponent(SuculentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
