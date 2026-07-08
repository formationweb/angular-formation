import { MyTest } from './my-test';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('Tester mytest', () => {
  let fixture: ComponentFixture<MyTest>;
  let comp: MyTest;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTest],
    }).compileComponents();
    fixture = TestBed.createComponent(MyTest);
    fixture.detectChanges();
    comp = fixture.componentInstance;
    el = fixture.nativeElement;
  });

  it('Tester title dans DOM', () => {
    const h1 = el.querySelector('h1');
    expect(comp.title()).toBe('Mon App');
    expect(h1?.textContent).toContain(comp.title());
  });
});
