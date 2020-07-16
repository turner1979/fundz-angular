import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FdzAddFundFormComponent } from './fdz-add-fund-form.component';

describe('FdzAddFundFormComponent', () => {
  let component: FdzAddFundFormComponent;
  let fixture: ComponentFixture<FdzAddFundFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FdzAddFundFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FdzAddFundFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
