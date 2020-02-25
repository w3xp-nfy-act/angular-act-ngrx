import { Component, OnInit } from '@angular/core';
import { NotificationService } from './shared/services';
import { MatSnackBar } from '@angular/material';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    examples = [
        {path: '/examples/01-observable-example', name: 'Observable'},
        {path: '/examples/02-operators-example', name: 'Operators'}
    ];

    constructor(private snackbar: MatSnackBar, private ns: NotificationService) {
    }

    ngOnInit() {
        this.ns.notifications$
            .subscribe(notification => this.showNotification(notification));
    }

    showNotification(notification) {
        this.snackbar.open(notification, 'OK', {
            duration: 3000
        });
    }
}
