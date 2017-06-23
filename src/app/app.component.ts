import {Component, OnInit} from '@angular/core';
import {PostService} from './post.service';
import {Observable} from 'rxjs/Observable';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.posts = this.postService.getPosts();
  }
}
