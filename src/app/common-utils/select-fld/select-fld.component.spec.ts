import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFldComponent } from './select-fld.component';

describe('SelectFldComponent', () => {
  let component: SelectFldComponent;
  let fixture: ComponentFixture<SelectFldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectFldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectFldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
