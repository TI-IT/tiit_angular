import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './modules/todo/todo.module';
import { BindingComponent } from './components/binding/binding.component';
import { FormsModule } from '@angular/forms';
import { FooComponent } from './components/foo/foo.component';
import { Lesson4Component } from './components/lesson4/lesson4.component';
import { Lesson5Component } from './components/lesson5/lesson5.component';
import { Lesson6Component } from './components/lesson6/lesson6.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    FooComponent,
    Lesson4Component,
    Lesson5Component,
    Lesson6Component
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
