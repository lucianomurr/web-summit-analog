import { Component } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { injectContentFiles } from '@analogjs/content';
import { RouterLink } from '@angular/router';
import { PostAttributes } from '../post.interface';

@Component({
  standalone: true,
  imports: [NgFor, RouterLink, AsyncPipe],
  template: `
    <h2 class="text-3xl font-bold">Posts</h2>
    <article
      class="flex flex-col dark:bg-gray-900"
      *ngFor="let post of posts; index as i"
    >
      <a
        rel="noopener noreferrer"
        [routerLink]="['/blog', post.slug]"
        aria-label="Te nulla oportere reprimique his dolorum"
      >
      
        <h3 class="flex-1 py-2 text-lg font-semibold leadi">
          {{ post.attributes.title }}
        </h3>
      </a>
    </article>
  `,
})
export default class IndexPage {
  posts = injectContentFiles<PostAttributes>();
}