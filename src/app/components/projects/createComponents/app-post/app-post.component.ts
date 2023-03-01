import { Component } from '@angular/core';

export interface Post {
title: string,
  text: string,
  id?: number
}

@Component({
  selector: 'app-app-post',
  templateUrl: './app-post.component.html',
  styleUrls: ['./app-post.component.scss']
})
export class AppPostComponent {
  posts: Post[] = [
  {title: 'Хочу выучить Angular Components', text: 'Я все еще учу компаненты', id: 1},
  {title: 'Следующий блок будет про директивы', text: 'Будут директивы и еще пайпы', id: 2},
  {title: 'Хочу выучить Angular', text: 'Angular компаненты', id: 3}
]
}
