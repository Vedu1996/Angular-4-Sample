import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {

  constructor(public http:HttpClient) {
    console.log('Service connected');
  }
  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
              .map(res=>res);
  }
  getASinglePost(id){
    return this.http.get('https://jsonplaceholder.typicode.com/posts/'+id)
              .map(res=>res);
  }
  makeAPost(post){
    this.http.post('https://jsonplaceholder.typicode.com/posts', post).subscribe();
  }

}
