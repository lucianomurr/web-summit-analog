import { MarkdownComponent, injectContent } from '@analogjs/content';
import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';

import { BlogPost } from 'src/app/models/post';

@Component({
  standalone: true,
  imports: [MarkdownComponent, NgIf, AsyncPipe],
  template: `
    <article
      class="max-w-7xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50"
      *ngIf="post$ | async as post"
    >
      <div class="w-full mx-auto space-y-4 text-center">
        <h1 class="text-4xl font-bold leadi md:text-5xl">
          {{ post.attributes.title }}
        </h1>
      </div>
      <div class="dark:text-gray-100 border-b dark:border-gray-700 py-6">
        <p><analog-markdown [content]="post.content" /></p>
      </div>
    </article>
  `,
})
export default class BlogPostPage {
  post$ = injectContent<BlogPost>();
}
