import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdzLoadingComponent } from './fdz-loading.component';

describe('FdzLoadingComponent', () => {
  let component: FdzLoadingComponent;
  let fixture: ComponentFixture<FdzLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdzLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdzLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
