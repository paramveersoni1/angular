import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharitiesAddComponent } from './charities-add.component';

describe('CharitiesAddComponent', () => {
  let component: CharitiesAddComponent;
  let fixture: ComponentFixture<CharitiesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharitiesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharitiesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
