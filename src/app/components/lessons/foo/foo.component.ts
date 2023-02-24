import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  template: string;
}


@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent {

  expression = true;
  deepObject: any = null;

  users: User[] = [
    {
      id: 1,
      name: 'Ivan Karpatu',
      template: 'bold'
    },
    {
      id: 2,
      name: 'Boris britva',
      template: 'cursive'
    },
    {
      id: 3,
      name: 'Igor Nogje',
      template: 'italic'
    },
    {
      id: 4,
      name: 'Nekiy Test',
      template: 'unknown'
    }
  ];

  generateUser(){
    this.deepObject = {
      user: {
        name: 'Tigran',
        surname: 'Ovakyan'
      }
    }
  }

  trackBy(index: number, user: User){
    return user.id
  }

}
