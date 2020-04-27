import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { publicRoutes} from './public.routes';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';

import { FileComponent } from './display_file/file.component';
import { ErrorboxComponent} from './error_box/errorbox.component';
import { ErrorpageComponent} from './error_page/errorpage.component';
import { HomePageComponent} from './home_page/homepage.component';
import { NoerrorpageComponent} from './no_error_page/noerrorpage.component';
import { ErrorComponent} from './components/error_message/errormsg.component';

@NgModule({
  declarations: [
    FileComponent,
    ErrorboxComponent,
    ErrorpageComponent,
    HomePageComponent,
    NoerrorpageComponent,
    ErrorComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(publicRoutes)
  ],
  providers: [],
  bootstrap: [FileComponent],

})
export class PublicModule { }
