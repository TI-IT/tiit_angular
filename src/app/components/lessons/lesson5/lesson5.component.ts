import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lesson5',
  templateUrl: './lesson5.component.html',
  styleUrls: ['./lesson5.component.scss']
})
export class Lesson5Component implements OnInit {
  @Input()
  title!: string;

  @Input()
  counter = 0;

  @Output()
  counterChange = new EventEmitter<number>();

  @Output()
  sayHi = new EventEmitter<string>();

  constructor() {
    console.log('constructor', this.title);
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.title);
  }

  onSayHi() {
    this.sayHi.emit(this.title + ' Hello');
    // TODO emit event
  }

}
