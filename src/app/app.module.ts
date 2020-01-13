import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArticleListComponent} from './components/article-list/article-list.component';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { EditorComponent } from './components/editor/editor.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';


const MAT_MODULES = [
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
];

const ADMIN_COMPONENTS = [
  ArticleListComponent,
  EditorComponent,
];

@NgModule({
  declarations: [
    AppComponent,
    ...ADMIN_COMPONENTS,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CKEditorModule,
    ...MAT_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
