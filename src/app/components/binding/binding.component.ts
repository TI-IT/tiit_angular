import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss']
})
export class BindingComponent implements OnInit {
  login = '';
  password = '';
  phone = '9684256';
  user = {
    name: 'Tigran',
    surname: 'Ovayan'
  };

  boldText = `<b>Bold Text my</b>`;

  constructor() {
  }

  get fullName() {
    return this.user.name + ' ' + this.user.surname;
  }

  ngOnInit(): void {
    setTimeout(() => this.updatePhone(), 3000);
  }

  updatePhone() {
    this.phone = Math.round(Math.random() * 10000000) + '';
  }

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    this.phone = target.value;
  }

  onSubmit() {
    if (this.login && this.password) {
      //TODO Submit
      alert(`You are authorized as ${this.login} with password ${this.password}`);

      this.login = this.password = '';
      return;
    }

    alert('login and password are required fields !!!');
  }
}
