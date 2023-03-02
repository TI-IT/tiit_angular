import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PostComponent } from './post/post.component';
import { RecommendationsListComponent } from './recommendations-list/recommendations-list.component';
import { FavoritesListComponent } from './favorites-list/favorites-list.component';


@NgModule({
  declarations: [
    MainPageComponent,
    SidebarComponent,
    PostComponent,
    RecommendationsListComponent,
    FavoritesListComponent,
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MainPageModule {
}
