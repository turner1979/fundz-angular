import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdzContentContainerComponent } from './fdz-content-container.component';

describe('FdzContentContainerComponent', () => {
  let component: FdzContentContainerComponent;
  let fixture: ComponentFixture<FdzContentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdzContentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdzContentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
