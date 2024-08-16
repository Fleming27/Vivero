import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnturiosComponent } from './anturios.component';

describe('AnturiosComponent', () => {
  let component: AnturiosComponent;
  let fixture: ComponentFixture<AnturiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnturiosComponent]
    });
    fixture = TestBed.createComponent(AnturiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
