import { async, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import { SchooldataComponent } from './tables.component'
import { TablesModule } from './tables.module'

describe('SchooldataComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ TablesModule, RouterTestingModule ],
    })
    .compileComponents()
  }))

  it('should create', () => {
    const fixture = TestBed.createComponent(SchooldataComponent)
    const component = fixture.componentInstance
    expect(component).toBeTruthy()
  })
})
