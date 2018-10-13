import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditschoolComponent } from './editschool.component';

describe('EditschoolComponent', () => {
  let component: EditschoolComponent;
  let fixture: ComponentFixture<EditschoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditschoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
