import { Component } from '@angular/core';
import { LoadingService } from '../../../shared/services';

@Component({
    selector: 'app-operator-markdown',
    template: `
    <markdown [src]="'./assets/md/operators.md'"(load)="onLoad($event)" (error)="onError($event)"></markdown>
    `
})

export class OperatorMarkdownComponent {

    constructor(public loadingService: LoadingService) {}
    
    public onLoad($event) {
        console.log('Observable-Markdown 02:  onLoad')
        
        setTimeout(() => {
            this.loadingService.showLoader();
        }, 0);
    }
    
    public onError($event) {
        console.log('Observable-Markdown 02: onError');
    }
}