import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Post } from '../app-post/app-post.component';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit{

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>() // ------1) Подготовка на отправку

  @ViewChild('titleInput', {static: false}) inputRef: ElementRef | any
  //static: true - если нужно обращатся в методе ngOnInit(){} в других местах folse
  title=''
  text=''
  constructor() {
  }
  ngOnInit() {
  }

  addPost(){
    if (this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      }

      this.onAdd.emit(post) //Вызываем когда хотим отправить на ружу------2) отправляем данные
        // принемает html в виде $event  --(onAdd)="upddatePosts($event)"

      console.log('new Post: ', post)

      this.title = this.text = ''
    }
  }
  focusTitle(){
    this.inputRef.nativeElement.focus()
  }
}
