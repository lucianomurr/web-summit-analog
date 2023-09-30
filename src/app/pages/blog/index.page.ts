import { Component } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { injectContentFiles } from '@analogjs/content';
import { RouterLink } from '@angular/router';

import { PostAttributes } from 'src/app/models/post';

@Component({
  standalone: true,
  imports: [NgFor, RouterLink, AsyncPipe],
  template: `
    <section class="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
      <div class="container p-6 mx-auto space-y-8">
        <div class="space-y-2 text-center">
          <h2 class="text-3xl font-bold">Posts</h2>
        </div>
        <div
          class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4"
        >
          <article
            class="flex flex-col dark:bg-gray-900"
            *ngFor="let post of posts; index as i"
          >
            <a
              rel="noopener noreferrer"
              [routerLink]="['/blog', post.slug]"
              aria-label="Te nulla oportere reprimique his dolorum"
            >
              <img
                alt=""
                class="object-cover w-full h-52 dark:bg-gray-500"
                src="https://source.unsplash.com/200x200/?pasta?{{i}}"
              />
            </a>
            <div class="flex flex-col flex-1 p-6">
              <h3 class="flex-1 py-2 text-lg font-semibold leadi">
                {{ post.attributes.title }}
              </h3>
            </div>
          </article>
        </div>
      </div>
    </section>
  `,
})
export default class IndexPage {
  posts = injectContentFiles<PostAttributes>();
}
