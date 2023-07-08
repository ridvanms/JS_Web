import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {
  id:number = 0

  constructor(private route:ActivatedRoute){}
  
  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id = param['id']
    })
  }
}
