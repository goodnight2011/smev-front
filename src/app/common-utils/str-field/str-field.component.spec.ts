import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrFieldComponent } from './str-field.component';

describe('StrFieldComponent', () => {
  let component: StrFieldComponent;
  let fixture: ComponentFixture<StrFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
