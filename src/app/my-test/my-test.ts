import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-my-test',
  imports: [],
  templateUrl: './my-test.html',
  styleUrl: './my-test.css',
})
export class MyTest {
  title = signal('Mon App')
}
