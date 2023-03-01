import { Component } from '@angular/core';

@Component({
  selector: 'app-connections',
  templateUrl: './connections.component.html',
  styleUrls: ['./connections.component.scss']
})
export class ConnectionsComponent {
  title = 'Dynamic title'
  bindings = 'Bindings'
  img = 'data:image/png;base64,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'
  inputValue = ''
  //---------------------------------------------Директива ngStyle
  backgroundToggle = false
  toggle = false
  toggleSwith: any = false

  constructor() {
  }
  //---------------------------------------------Bindings

 //---------------------------------------------Event Bindings
onInput(event: any){
    this.inputValue = (<HTMLInputElement>event.target).value
}

  //---------------------------------------------2 Way Binding
  //---------------------------------------------Циклы с ngFor
  arr = [1,1,2,3,5,8,13]

  objis = [
    {title: 'Post1', author: 'Tigran', comments: [
        {name: 'Max', text: 'lorem1'},
        {name: 'Max', text: 'lorem2'},
        {name: 'Max', text: 'lorem3'},
      ]},
    {title: 'Post2', author: 'Tigran 2', comments: [
        {name: 'Max2', text: 'lorem1'},
        {name: 'Max2', text: 'lorem2'},
        {name: 'Max2', text: 'lorem3'},
      ]},
  ]

  now: Date = new Date()





}
