import { Component } from '@angular/core';
import {PostInput} from '../../../common-ui/post-input/post-input';
import {Post} from '../post/post';

@Component({
  selector: 'app-post-feed',
  imports: [
    PostInput,
    Post
  ],
  templateUrl: './post-feed.html',
  styleUrl: './post-feed.scss',
})
export class PostFeed {

}
