import { Component, OnInit } from '@angular/core';
import {from} from "rxjs";
import {filter, map, scan} from "rxjs/operators";
import { LoadingService } from '../../../shared/services';

@Component({
    selector: 'app-input',
    styleUrls: ['./operator-view.component.scss'],
    templateUrl: './operator-view.component.html'
})

export class OperatorComponent implements OnInit {

    constructor(public loadingService: LoadingService) { }

    ngOnInit() {
		console.log('Observable-Component 02: ngOnInit');

		this.loadingService.hideLoader();

        //emit (1, 2, 3, 4, 5, 6)
        const source = from([1, 2, 3, 4, 5, 6]); // Observable creation methods

        const example = source.pipe(
            filter(x => x % 2 === 0), // 2, 4, 6
            map(x => x + x), // 4, 8, 12
            scan((acc, x) => acc + x, 0) // 4, 12, 24
        );
        // output: 4, 12, 24
        const subscribe = example.subscribe(val => console.log(val));
    }
}