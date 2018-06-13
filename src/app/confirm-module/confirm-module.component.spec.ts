import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmModuleComponent } from './confirm-module.component';

describe('ConfirmModuleComponent', () => {
  let component: ConfirmModuleComponent;
  let fixture: ComponentFixture<ConfirmModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
