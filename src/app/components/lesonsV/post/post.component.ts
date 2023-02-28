import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  inputValue = ''
  title='Interface'

  onInput(event: KeyboardEvent | any){
    this.inputValue = (<HTMLInputElement>event.target).value
    this.title = (<HTMLInputElement>event.target).value
  }

  onClick(){
    console.log('click')
  }
}
