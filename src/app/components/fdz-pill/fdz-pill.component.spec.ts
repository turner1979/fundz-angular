import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdzPillComponent } from './fdz-pill.component';

describe('FdzPillComponent', () => {
  let component: FdzPillComponent;
  let fixture: ComponentFixture<FdzPillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdzPillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdzPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
