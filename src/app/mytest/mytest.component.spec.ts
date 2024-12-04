import { ComponentFixture, TestBed } from "@angular/core/testing"
import { MytestComponent } from "./mytest.component"

describe('Tester MyTestComponent', () => {
    let fixture: ComponentFixture<MytestComponent>
    let component: MytestComponent
    let el: HTMLElement

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [MytestComponent]
        }).compileComponents()

        fixture = TestBed.createComponent(MytestComponent)
        fixture.detectChanges()
        component = fixture.componentInstance
        el = fixture.nativeElement
    })

    it('Vérifier propriété est bien dans le tpl', () => {
        const h1 = el.querySelector('h1')
        expect(component.title).toBe('Mon App')
        expect(h1?.textContent).toContain(component.title)
    })
})