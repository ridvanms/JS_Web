import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';

import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { AlbumComponent } from './album.component';

export const routes:Routes = [
  {
    path: 'photo/detail/:id',
//     resolve: { photo: PhotoResolver },
//     canActivate: [AuthGuard],
    component: PhotoDetailComponent,
  },
]

@NgModule({
  declarations: [
    PhotoDetailComponent,
    AlbumComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    PhotoDetailComponent,
    AlbumComponent
  ]
})
export class AlbumModule { }
