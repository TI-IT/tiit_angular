import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-lesson6',
  templateUrl: './lesson6.component.html',
  styleUrls: ['./lesson6.component.scss']
})
export class Lesson6Component {

  @Input()
  template?: TemplateRef<{$implicit: number}>;

}
