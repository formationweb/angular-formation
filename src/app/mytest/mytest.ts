import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-mytest',
  imports: [],
  templateUrl: './mytest.html',
  styleUrl: './mytest.css',
})
export class Mytest {
  title = signal('Mon App')
}
