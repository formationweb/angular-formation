import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MytestComponent } from './mytest.component';

describe('Tester le composant', () => {
   let fixture: ComponentFixture<MytestComponent>
   let component: MytestComponent
   let tpl: HTMLElement

   beforeEach(async () => {
     await TestBed.configureTestingModule({
      declarations: [MytestComponent],
      imports: []
     }).compileComponents()

     fixture = TestBed.createComponent(MytestComponent)
     fixture.detectChanges()
     component = fixture.componentInstance
     tpl = fixture.nativeElement
   })

   it('title dans le tpl vaut Mon App', () => {
     const h1 = tpl.querySelector('h1')
     expect(h1?.textContent).toContain(component.title)
   })
})