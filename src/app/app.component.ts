import {Component, OnInit} from '@angular/core';
import {PostService} from './post.service';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: Post[];

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postService.getPosts()
      .subscribe(
        (posts: Post[]) => this.posts = posts,
        (error: any) => console.log(error),
        () => console.log('Get posts completed')
      );
  }
}
