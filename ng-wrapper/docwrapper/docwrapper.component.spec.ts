import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocwrapperComponent } from './docwrapper.component';

describe('DocwrapperComponent', () => {
  let component: DocwrapperComponent;
  let fixture: ComponentFixture<DocwrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocwrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocwrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
