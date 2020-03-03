import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center" class="content">
      <h1>{{title}}</h1>
    </div>
    <app-first></app-first>
    <app-second></app-second>
    <app-third></app-third>
  `,
  styles: []
})
export class AppComponent {
  title = 'Example via Redux for central state management';
}
