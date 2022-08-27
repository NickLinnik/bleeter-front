import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {UserPageComponent} from './users/user-page/user-page.component';
import {PostComponent} from './posts/post/post.component';
import {UserHeaderComponent} from './users/user-header/user-header.component';
import { UserSignatureComponent } from './users/user-signature/user-signature.component';

@NgModule({
  declarations: [
    AppComponent,
    UserPageComponent,
    PostComponent,
    UserHeaderComponent,
    UserSignatureComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
