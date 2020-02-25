import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../../../shared/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-input',
  styleUrls: ['./observable-view.component.scss'],
  templateUrl: './observable-view.component.html'
})
export class ObservableComponent implements OnInit {
  
	constructor(public loadingService: LoadingService) { }

	ngOnInit() {
		console.log('Observable-Component 01: ngOnInit');

		this.loadingService.hideLoader();

		const observable = new Observable(subscriber => {
			subscriber.next(1);
			subscriber.next(2);
			subscriber.next(3);
			setTimeout(() => {
				subscriber.next(4);
				subscriber.complete();
			}, 1000);
		});

    // To invoke the Observable and see these values, we need to subscribe to it:

		console.log('just before subscribe');
		observable.subscribe({
			next(x) { console.log('got value ' + x); },
			error(err) { console.error('something wrong occurred: ' + err); },
			complete() { console.log('done'); }
		});
		console.log('just after subscribe');
  }
}
