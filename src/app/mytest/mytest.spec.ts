import { Mytest } from './mytest';
import { ComponentFixture, TestBed } from "@angular/core/testing"

describe('Tester Mytest', () => {
  let fixture: ComponentFixture<Mytest>
  let comp: Mytest
  let el: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mytest]
    }).compileComponents()

    fixture = TestBed.createComponent(Mytest)
    fixture.detectChanges()
    comp = fixture.componentInstance
    el = fixture.nativeElement
  })

  test('Tester la propriété title', () => {
    const h1 = el.querySelector('h1')
    expect(comp.title()).toBe('Mon App')
    expect(h1?.textContent).toContain(comp.title())
  })
})