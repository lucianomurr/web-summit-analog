import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `<header class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="md:flex md:items-center md:gap-12">
          <span class="sr-only">Home</span>
          <a href="/">
            <svg
              width="44"
              height="44"
              viewBox="0 0 473 538"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Luciano Murruni</title>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <path
                  d="M28.5103762,425.369775 L0.508077469,409.20264 L0.508077469,136.70264 L236.5,0.452640189 L386.479371,87.0432703 L242,453 L163,123 L28.5103762,425.369775 Z M68.4732254,448.442337 L223.416797,537.899049 L150,257 L68.4732254,448.442337 Z M273.152264,524.291445 L463.402118,414.450641 L388,416 L388,212 L273.152264,524.291445 Z M472.491923,367.024315 L472.491923,136.70264 L433,113.901968 L433,367.024315 L472.491923,367.024315 Z"
                  id="Polygon-1"
                  fill="#50E3C2"
                ></path>
              </g>
            </svg>
          </a>
        </div>

        <div class="hidden md:block">
          <nav aria-label="Global">
            <ul class="flex items-center gap-6 text-sm">
              <li>
                <a
                  class="text-gray-500 transition hover:text-gray-500/75"
                  href="/about"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  class="text-gray-500 transition hover:text-gray-500/75"
                  href="/blog"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  class="text-gray-500 transition hover:text-gray-500/75"
                  href="/new-page"
                >
                  404
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>`,
  styles: [],
})
export class HeaderComponent {}
