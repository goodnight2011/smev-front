import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipsLineComponent } from './chips-line.component';

describe('ChipsLineComponent', () => {
  let component: ChipsLineComponent;
  let fixture: ComponentFixture<ChipsLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipsLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipsLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
