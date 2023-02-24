import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-lesson7menu',
  templateUrl: './lesson7menu.component.html',
  styleUrls: ['./lesson7menu.component.scss']
})
export class Lesson7menuComponent {

  @HostBinding('class')
  hostClass = 'hidden';

  private skipClick=false;

  @HostListener('click', ['$event'])
  hostClick(event: Event){
    console.log('click', event);
    // Чтобы клики в меню не закрывали меню
    event.stopPropagation()
  }

  // window:click-Подписка 1 раз ПОДПИСКА и ОТПИСКА не Требуется
  // @HostListener('window:click', ['$event'])
  // windowClick(event: Event){
  //   console.log('window click', event)
  // }

  show(){
    this.hostClass = '';
    this.skipClick = true;
  }
  @HostListener('window:click')
  hide(){
    if(this.skipClick){
      this.skipClick = false;
      return;
    }
    this.hostClass = 'hidden';
  }

}
