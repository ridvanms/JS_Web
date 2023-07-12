import { Component, OnInit } from '@angular/core';
import {Comment} from "../../Types/Comment"
import { CommentService } from '../comment.service';
import { GlobalService } from 'src/app/core/global-loader/global.service';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit{
  comments: Comment[] = [];

  constructor(private commentService:CommentService,private globalService:GlobalService){}

  ngOnInit(): void {
    this.commentsLoader();
  }
  commentsLoader(){
    this.globalService.showLoader()

    this.commentService.getComments().subscribe({
      next:(comments)=>{
        this.comments = comments
        this.globalService.hideLoader()
      },
      error:(err)=>{console.error(`Error: ${err.message}`)}
    })
  }
}
