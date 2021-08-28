import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JwPaginateComponent } from './jw-paginate.component';

describe('JwPaginateComponent', () => {
  let component: JwPaginateComponent;
  let fixture: ComponentFixture<JwPaginateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JwPaginateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JwPaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
