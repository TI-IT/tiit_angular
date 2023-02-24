import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  expression = false;

  title = 'my-project';
  show = true;
  age = 18;

  onSayHi(text: string) {
    console.log(text);
  }
}
