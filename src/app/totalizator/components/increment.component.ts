import { Component, Inject, OnInit } from '@angular/core';
import { Store } from 'redux';
import { ICalculateState } from '../../store/state/calculate.state';
import * as CounterActions from '../../store/actions/calculate.actions';

@Component({
  selector: 'app-first',
  template: `
    <h3>{{ title }} works!</h3>
    <div class="counter">
      <span>{{ counter }}</span>
    </div>
    <button (click)="increment()">
      Increment once
    </button>
  `,
  styles: []
})
export class IncrementComponent implements OnInit {
  title = 'INCREMENT component';

  unsubscribe: any;
  counter: number;

  constructor(
    @Inject('AppStore') private appStore: Store<ICalculateState>,
  ) {
    this.unsubscribe = this.appStore.subscribe(() => this.readState());
    this.readState();
  }

  readState() {
    let state: ICalculateState = this.appStore.getState() as ICalculateState;
    this.counter = state.counter;
  }

  increment() {
    this.appStore.dispatch(CounterActions.increment());
  }

  ngOnDestroy() {
    // remove listener
    this.unsubscribe();
  }

  ngOnInit() { }
}
