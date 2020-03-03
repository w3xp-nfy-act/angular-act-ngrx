import { Component, OnInit } from '@angular/core';
import { LoadingService } from './service/loading.service';

@Component({
  selector: 'app-ngrx-ov-md',
  template: `   
  <!-- loaded from remote url -->
  <markdown [src]="'./assets/md/ngrx-ov.md'" (load)="onLoad($event)" (error)="onError($event)"></markdown>
  `,
  styles: [`
  p {
    width: 95%;
    margin-left: 15px;
  }
`]
})
export class AppMarkdownComponent implements OnInit {
  markup: any;

  constructor(public loadingService: LoadingService) {}

    ngOnInit() { }

  public onLoad($event) {

    setTimeout(() => {
      this.loadingService.showLoader();
    },0);
  }

  public onError($event) {
    console.log('Observable-Markdown 01: onError');
  }
}