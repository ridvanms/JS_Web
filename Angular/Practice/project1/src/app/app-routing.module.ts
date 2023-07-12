import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PhotosComponent } from './photos/photos.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    component:HomeComponent
  },
  {
    path:"about",
    component:AboutComponent
  },
  {
    path:"photos",
    loadChildren:() => import("./photos/photos.module").then(m => m.PhotosModule)
  },
  {
    path:"comments",
    component:CommentsComponent
  },
  {
    path:'contacts',
    component:ContactsComponent
  },
  {
    path:"users",
    loadChildren:() => import("./users/users.module").then(m => m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
