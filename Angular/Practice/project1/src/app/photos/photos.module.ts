import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PhotosComponent } from './photos.component';
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';

const routes:Routes = [
  {
    path:"",
    component:PhotosComponent
  },
  {
    path:":id",
    component:PhotoDetailComponent
  }
]


@NgModule({
  declarations: [
    PhotoDetailComponent,
    PhotosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule,
    PhotoDetailComponent,
    PhotosComponent
  ],
})
export class PhotosModule { }
