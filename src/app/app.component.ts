import { Component } from '@angular/core';
import { LoadingService } from './service/loading.service';

@Component({
  selector: 'app-root',
  template: `
  <ng-template [ngIf]="loadingService.isLoading() | async">
  <h1>{{title}}</h1>
  <h2>{{subtitle}}</h2>
  <app-first></app-first>
  <app-second></app-second>
  <app-third></app-third>
</ng-template>

    <p><br></p>
    <app-ngrx-ov-md></app-ngrx-ov-md>
  `,
  styles: []
})
export class AppComponent {
  title = 'State management with reducer pattern via Redux.';
  subtitle = 'Example:';

  constructor(public loadingService: LoadingService) { }
}
