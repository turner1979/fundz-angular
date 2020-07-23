import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdzVersionComponent } from './fdz-version.component';

describe('FdzVersionComponent', () => {
  let component: FdzVersionComponent;
  let fixture: ComponentFixture<FdzVersionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdzVersionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdzVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
