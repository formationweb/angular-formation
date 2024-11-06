import { ComponentFixture, TestBed } from "@angular/core/testing"
import { MytestComponent } from "./mytest.component"

describe('Tester le composant', () => {
  let fixture: ComponentFixture<MytestComponent>
  let component: MytestComponent
  let view: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MytestComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(MytestComponent)
    fixture.detectChanges()
    component = fixture.componentInstance
    view = fixture.nativeElement
  })

  it('Vérifier propriété title', () => {
    const h1 = view.querySelector('h1')
    expect(component.title).toBe('Mon App')
    expect(h1?.textContent).toContain(component.title)
  })
})