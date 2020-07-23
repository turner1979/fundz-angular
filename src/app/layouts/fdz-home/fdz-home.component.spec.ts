import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdzHomeComponent } from './fdz-home.component';

describe('FdzHomeComponent', () => {
  let component: FdzHomeComponent;
  let fixture: ComponentFixture<FdzHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdzHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdzHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
