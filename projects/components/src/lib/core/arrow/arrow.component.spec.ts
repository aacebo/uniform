import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniArrowComponent } from './arrow.component';

describe('UniArrowComponent', () => {
  let component: UniArrowComponent;
  let fixture: ComponentFixture<UniArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
