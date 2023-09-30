import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    
      <div class="w-full mx-auto space-y-4 text-center">
        <h1 class="text-4xl font-bold leadi md:text-5xl">
          Welcome to Angular Global Summit 2023
        </h1>
        <p class="text-sm dark:text-gray-400">
          by
          <a
            rel="noopener noreferrer"
            href="#"
            target="_blank"
            class="underline dark:text-violet-400"
          >
            <span itemprop="name">Luciano Murruni</span>
          </a>
          on
          <time datetime="2021-02-12 15:34:18-0200">Oct 17th 2023</time>
        </p>
      </div>
    
  `,
})
export default class HomeComponent {}
