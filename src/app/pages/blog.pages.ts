import { Component } from '@angular/core'; 
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1 class="text-4xl font-bold leadi md:text-5xl">Angular summit blog</h1>

    <router-outlet />
  `,
})
export default class BlogPage {} 