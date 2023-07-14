import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments/comments.component';
import { CommentsRouter } from './comments-router.module';



@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    CommonModule,
    CommentsRouter
  ],
  exports:[CommentsComponent]
})
export class CommentsModule { }
