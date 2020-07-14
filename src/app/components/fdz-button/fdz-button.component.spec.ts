import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdzButtonComponent } from './fdz-button.component';

describe('FdzButtonComponent', () => {
  let component: FdzButtonComponent;
  let fixture: ComponentFixture<FdzButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdzButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdzButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
