import { ComponentFixture, TestBed } from "@angular/core/testing"
import { MytestComponent } from "./mytest.component"

describe('Tester mytest', () => {
  let fixture: ComponentFixture<MytestComponent>
  let component: MytestComponent
  let tpl: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MytestComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(MytestComponent)
    fixture.detectChanges()
    component = fixture.componentInstance
    tpl = fixture.nativeElement
  })

  it('Mon App est bien dans h1', () => {
    const h1 = tpl.querySelector('h1')
    expect(component.title).toBe('Mon App')
    expect(h1?.textContent).toContain(component.title)
  })
})