import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeplansComponent } from './subscribeplans.component';

describe('SubscribeplansComponent', () => {
  let component: SubscribeplansComponent;
  let fixture: ComponentFixture<SubscribeplansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscribeplansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribeplansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
