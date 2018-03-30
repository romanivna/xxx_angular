import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GedalfComponent } from './gendalf.component';

describe('GedalfComponent', () => {
  let component: GedalfComponent;
  let fixture: ComponentFixture<GedalfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GedalfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GedalfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
