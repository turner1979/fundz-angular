import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdzInputColourComponent } from './fdz-input-colour.component';

describe('FdzInputColourComponent', () => {
  let component: FdzInputColourComponent;
  let fixture: ComponentFixture<FdzInputColourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdzInputColourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdzInputColourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
