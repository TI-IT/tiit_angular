import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ConnectionsComponent } from './components/documentation/connections/connections.component';
import { PostComponent } from './components/projects/createComponents/post/post.component';
import { PostFormComponent } from './components/projects/createComponents/post-form/post-form.component';
import { AppPostComponent } from './components/projects/createComponents/app-post/app-post.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnectionsComponent,
    PostComponent,
    PostFormComponent,
    AppPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
