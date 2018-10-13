import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeuleComponent } from './modeule.component';

describe('ModeuleComponent', () => {
  let component: ModeuleComponent;
  let fixture: ComponentFixture<ModeuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModeuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
