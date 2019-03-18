import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MobileAppsComponent } from './components/mobile-apps/mobile-apps.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { WebProjectsComponent } from './components/web-projects/web-projects.component';
import { ProjectsGuard } from './projects.guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: ServicesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'mobileapps', component: MobileAppsComponent },
  { path: 'projects', component: ProjectsComponent, canActivate: [ProjectsGuard] },
  { path: 'services', component: ServicesComponent },
  { path: 'webprojects', component: WebProjectsComponent },
  { path: 'login',  component: LoginComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
