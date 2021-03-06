import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_BOOTSTRAP_LISTENER } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { publicRoutes} from './public.routes';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { from } from 'rxjs';

import {ScrollingModule} from '@angular/cdk/scrolling';

import { FileComponent } from './display_file/file.component';
import { ErrorboxComponent} from './error_box/errorbox.component';
import { HomePageComponent} from './home_page/homepage.component';
import { SpecificationComponent} from './specification/specification.component';


import { UploadFileService } from './services/upload-file.service'

@NgModule({
  declarations: [
    FileComponent,
    ErrorboxComponent,
    HomePageComponent,
    SpecificationComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    NgbModule,
    FormsModule,
    ScrollingModule,
    RouterModule.forRoot(publicRoutes)
  ],
  providers: [UploadFileService],
  bootstrap: [FileComponent]

})
export class PublicModule { }
