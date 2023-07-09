import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { AlbumComponent } from './album/album.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:HomeComponent},
  {path:"contacts",component:ContactsComponent},
  {path:"about",component:AboutComponent},
  {path:"album",component:AlbumComponent},
  {
    path:"comments",
    loadChildren:() => import('./comments/comments.module').then(m => m.CommentsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
