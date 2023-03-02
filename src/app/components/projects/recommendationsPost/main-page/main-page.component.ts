import { Component } from '@angular/core';
import { IPost } from '../interfaces/post-interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  favoritesPosts: IPost[] = [];
  recommendedPosts: IPost[] = [
    {
      id: 1,
      title: 'Hello',
      desc: 'Hello I am tigran'
    },
    {
      id: 2,
      title: 'JS Post 2',
      desc: 'Hello I am tigran post 2'
    },
    {
      id: 3,
      title: 'Angular',
      desc: 'Hello I am tigran post 3'
    }
  ];


  addToRecommendedHandler(post: IPost): void {
    this.deletePostFromRecommended(post);
    this.addPostFromRecommended(post);
  }

  private deletePostFromRecommended(post: IPost): void {
    this.recommendedPosts = this.recommendedPosts.filter(postItem => postItem.id !== post.id);
  }

  private addPostFromRecommended(post: IPost): void {
    this.favoritesPosts.push(post);
  }


  addToFavoritesHandler(post: IPost): void {
    this.deletePostFromFavorites(post);
    this.addPostFromFavorites(post);
  }

  private deletePostFromFavorites(post: IPost): void {
    console.log(post.id)
    console.log(this.favoritesPosts)
    this.favoritesPosts = this.favoritesPosts.filter(postItem => postItem.id !== post.id);
  }

  private addPostFromFavorites(post: IPost): void {
    this.recommendedPosts.push(post);
  }

}
