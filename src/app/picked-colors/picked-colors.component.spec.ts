import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickedColorsComponent } from './picked-colors.component';

describe('PickedColorsComponent', () => {
  let component: PickedColorsComponent;
  let fixture: ComponentFixture<PickedColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickedColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickedColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
