import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EditorComponent} from './components/editor/editor.component';
import {ArticleListComponent} from './components/article-list/article-list.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/article-list',
    pathMatch: 'full'
  },
  {
    path: 'article-list',
    component: ArticleListComponent
  },
  {
    path: 'editor',
    component: EditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
