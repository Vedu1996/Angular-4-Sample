import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(public route:ActivatedRoute, public dataService:DataService) { }
  post;
  ngOnInit() {
    this.route.params.subscribe(
      param=>this.dataService.getASinglePost(param.id).subscribe(post=>{
        this.post=post;
      })
    );

  }

}
