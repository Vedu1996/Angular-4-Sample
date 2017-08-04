import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name : string;
  age: number;
  email: string;
  address: address;
  hobbies:string[];
  newHobby: string;
  showHobbies:boolean;
  posts:Object;
  newPost:FormGroup;
  showPosts:boolean;
  constructor(private dataService: DataService, private formBuilder: FormBuilder) { }
  ngOnInit() {
    console.log('Whoa!');
    this.name = 'Nigga';
    this.age = 30;
    this.showPosts = false;
    this.showHobbies = true;
    this.email = 'nigga@niggamail.com';
    this.address = {
      street:'8 Mile',
      city: 'Detroit',
      state: 'Michigan'
    }
    this.hobbies = [
      'Coding',
      'Biking'
    ];
    this.dataService.getPosts().subscribe(posts=>this.posts=posts);
    this.newPost = this.formBuilder.group({
      title: [, [Validators.required]],
      id: [, [Validators.required]],
      body: [],
      userId: [, Validators.required]
    });
  }
  clickHandle(){
    if(this.newHobby){
      this.hobbies.push(this.newHobby);
      this.newHobby=undefined;
    }
  }
  toggleShowPosts(){
    this.showPosts = !this.showPosts;
  }
  toggleShowHobbies(){
    this.showHobbies = !this.showHobbies;
  }
  submitPost(model:post, isValid:boolean){
    if(isValid){
      this.dataService.makeAPost(model);
    }
  }

}
interface address{
  street:string,
  city:string,
  state:string,
}
interface post{
  title:string,
  id:number,
  body:string,
  userId:number
}
