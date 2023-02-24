import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoWidgetComponent } from './widgets/todo-widget/todo-widget.component';


@NgModule({
  declarations: [
    TodoWidgetComponent
  ],
  exports: [
    TodoWidgetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TodoModule {
}
