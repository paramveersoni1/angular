import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsubscribeComponent } from './addsubscribe.component';

describe('AddsubscribeComponent', () => {
  let component: AddsubscribeComponent;
  let fixture: ComponentFixture<AddsubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
