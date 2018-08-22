import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonInfoFormComponent } from './common-info-form.component';

describe('CommonInfoFormComponent', () => {
  let component: CommonInfoFormComponent;
  let fixture: ComponentFixture<CommonInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonInfoFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
