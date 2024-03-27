import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MytestComponent } from './mytest.component';

describe('Tester MyTestComponent', () => {
  let fixture: ComponentFixture<MytestComponent>
  let component: MytestComponent
  let rootEl: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MytestComponent]
    }).compileComponents()
    fixture = TestBed.createComponent(MytestComponent)
    fixture.detectChanges()
    component = fixture.componentInstance
    rootEl = fixture.nativeElement
  })

  it('Vérifier que propriété title est égal Mon App', () => {
    const h1 = rootEl.querySelector('h1')
    expect(component.title).toBe('Mon App')
    expect(h1?.textContent).toContain(component.title)
  })
})