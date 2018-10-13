import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListschoolComponent } from './listschool.component';

describe('ListschoolComponent', () => {
  let component: ListschoolComponent;
  let fixture: ComponentFixture<ListschoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListschoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListschoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
