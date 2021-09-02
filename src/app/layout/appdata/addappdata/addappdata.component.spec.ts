import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddappdataComponent } from './addappdata.component';

describe('AddappdataComponent', () => {
  let component: AddappdataComponent;
  let fixture: ComponentFixture<AddappdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddappdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddappdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
