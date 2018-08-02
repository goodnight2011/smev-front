import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFldComponent } from './table-fld.component';

describe('TableFldComponent', () => {
  let component: TableFldComponent;
  let fixture: ComponentFixture<TableFldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
