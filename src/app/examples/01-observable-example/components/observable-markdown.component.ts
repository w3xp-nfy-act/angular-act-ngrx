import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../../shared/services';

@Component({
  selector: 'app-observable-markdown',
  template: `
  <!-- static markdown -->
  <ng-template [ngIf]="loadingService.isLoading() | async">
      <!-- more elements -->
      <markdown ngPreserveWhitespaces>
      ## Article: RxJS - Reactive Extensions Library for JavaScript
      </markdown>
      
      <!-- variable binding -->
      <markdown [data]="markup"></markdown>
  </ng-template>
    
  <!-- loaded from remote url -->
  <markdown [src]="'./assets/md/observable.md'" (load)="onLoad($event)" (error)="onError($event)"></markdown>
  `,
  styles: [`
  p {
    width: 95%;
    margin-left: 15px;
  }
`]
})
export class ObservableArticleMarkdownComponent implements OnInit {
  markup: any;

  constructor(public loadingService: LoadingService) {
    this.markup = `
      * See:
      [Website](https://rxjs-dev.firebaseapp.com/guide/overview)
      [Started](https://rxjs-dev.firebaseapp.com/guide/overview)
      [Docs](https://rxjs-dev.firebaseapp.com/api)
      [GitHub](https://github.com/ReactiveX/rxjs/tree/master/doc)
      [Learn](https://www.learnrxjs.io/)
      
      * Infos:
      [ReactiveX](http://reactivex.io/) - An API for asynchronous programming with observable streams
      > **The Observer pattern done right**  
      > ReactiveX is a combination of the best ideas from the Observer pattern, the Iterator pattern, and functional programming.  
      > In ReactiveX an observer subscribes to an Observable. Then that observer reacts to whatever item or sequence of items the Observable emits.  
        `;
  }

  ngOnInit() {

  }

  public onLoad($event) {
    console.log('Observable-Markdown 01:  onLoad')
    
    setTimeout(() => {
        this.loadingService.showLoader();
    }, 0);
}

public onError($event) {
    console.log('Observable-Markdown 01: onError');
}
}