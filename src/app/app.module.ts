import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ServicesComponent } from './components/services/services.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { WebProjectsComponent } from './components/web-projects/web-projects.component';
import { MobileAppsComponent } from './components/mobile-apps/mobile-apps.component';

@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    ProjectsComponent,
    GalleryComponent,
    WebProjectsComponent,
    MobileAppsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
