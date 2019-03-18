import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule, PaginationModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './components/services/services.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { WebProjectsComponent } from './components/web-projects/web-projects.component';
import { MobileAppsComponent } from './components/mobile-apps/mobile-apps.component';
import { LoginComponent, ModalContentComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    GalleryComponent,
    ProjectsComponent,
    WebProjectsComponent,
    MobileAppsComponent,
    LoginComponent,
    ModalContentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot(),
    PaginationModule.forRoot()
  ],
  providers: [],
  entryComponents: [ ModalContentComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
