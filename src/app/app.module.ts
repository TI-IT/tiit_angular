import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './modules/todo/todo.module';
import { BindingComponent } from './components/lessons/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { FooComponent } from './components/lessons/foo/foo.component';
import { Lesson4Component } from './components/lessons/lesson4/lesson4.component';
import { Lesson5Component } from './components/lessons/lesson5/lesson5.component';
import { Lesson6Component } from './components/lessons/lesson6/lesson6.component';
import { Lesson7menuComponent } from './components/lessons/lesson7menu/lesson7menu.component';
import { ParentComponent } from './components/lessons/lesson8/parent/parent.component';
import { ChildComponent } from './components/lessons/lesson8/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    FooComponent,
    Lesson4Component,
    Lesson5Component,
    Lesson6Component,
    Lesson7menuComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    TodoModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
