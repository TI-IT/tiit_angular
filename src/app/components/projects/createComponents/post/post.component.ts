import { Component, ElementRef, ContentChild, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../app-post/app-post.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit{
  // @Input('myPost') post: Post | any //входящее свойство ('myPost')-ожидаемый параметор
  @Input() post: Post | any //входящее свойство ('')-если пусто то по умолчанию будет post

  @Output() onRemove = new EventEmitter<number>()
  @ContentChild('info', {static: true}) infoRef: ElementRef | any

  removePost(){
    this.onRemove.emit(this.post.id)
  }

  constructor() {
  }
  ngOnInit(){
    //Получаем доступ до div
    // console.log(this.infoRef.nativeElement)
  }
}
