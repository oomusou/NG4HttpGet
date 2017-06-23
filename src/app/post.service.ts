import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Post} from './post';
import {Http, Response} from '@angular/http';

@Injectable()
export class PostService {
  private getPostsURI = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: Http) { }

  getPosts(): Observable<Post[]>  {
    return this.http.get(this.getPostsURI)
      .map((response: Response) => response.json());
  }
}
