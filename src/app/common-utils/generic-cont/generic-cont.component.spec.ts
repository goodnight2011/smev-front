import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericContComponent } from './generic-cont.component';

describe('GenericContComponent', () => {
  let component: GenericContComponent;
  let fixture: ComponentFixture<GenericContComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenericContComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
