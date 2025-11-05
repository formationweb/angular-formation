import { ComponentFixture, TestBed } from "@angular/core/testing"
import { Mytest } from "./mytest"

describe('Tester mytest component', () => {
  let fixture: ComponentFixture<Mytest>
  let comp: Mytest
  let view: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mytest]
    }).compileComponents()

    fixture = TestBed.createComponent(Mytest)
    fixture.detectChanges()
    comp = fixture.componentInstance
    view = fixture.nativeElement
  })

  it('Vérifier que Mon App est bien dans <h1>', () => {
    const h1 = view.querySelector('h1')
    expect(comp.title()).toBe('Mon App')
    expect(h1?.textContent).toContain(comp.title())
  })
})