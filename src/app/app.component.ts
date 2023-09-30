import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header.component';
import { FooterComponent } from './shared/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: ` <div class="flex flex-col h-screen justify-between">
    <app-header />
    <div
      class="max-w-7xl px-6 py-24 mx-auto space-y-12 dark:bg-gray-800 dark:text-gray-50 h-full"
    >
      <router-outlet />
    </div>
    <app-footer />
  </div>`,
  styles: [],
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
})
export class AppComponent {}
