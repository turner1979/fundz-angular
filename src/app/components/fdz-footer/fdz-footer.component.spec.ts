import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdzFooterComponent } from './fdz-footer.component';

describe('FdzFooterComponent', () => {
  let component: FdzFooterComponent;
  let fixture: ComponentFixture<FdzFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdzFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdzFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
