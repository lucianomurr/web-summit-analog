import { MarkdownComponent, injectContent } from '@analogjs/content';
import { AsyncPipe, CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { PostAttributes } from '../post.interface';

@Component({
  standalone: true,
  imports: [MarkdownComponent, NgIf, AsyncPipe, CommonModule],
  template: `
    <article *ngIf="post$ | async as post">
        <h1>
          {{ post.attributes.title }}
        </h1>
        <p>{{post.content}}</p>
    </article>
  `,
})
export default class BlogPostPage {
  post$ = injectContent<PostAttributes>();
}