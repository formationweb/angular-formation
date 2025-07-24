import { ComponentFixture, TestBed } from '@angular/core/testing'
import { beforeEach, describe, expect, test } from 'vitest'
import { Mytest } from './mytest'

describe('Tester MyTestComponent', () => {
  let fixture: ComponentFixture<Mytest>
  let component: Mytest
  let view: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mytest]
    }).compileComponents()
    fixture = TestBed.createComponent(Mytest)
    fixture.detectChanges()
    component = fixture.componentInstance
    view = fixture.nativeElement
  })

  test('Vérifier propriété title == Mon App', () => {
    const h1 = view.querySelector('h1')
    expect(component.title()).toBe('Mon App')
    expect(h1?.textContent).toContain(component.title())
  })
})