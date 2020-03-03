import { Component, Inject, OnInit } from '@angular/core';
import { Store } from 'redux';
import { ICalculateState } from '../../store/state/calculate.state';
import * as CounterActions from '../../store/actions/calculate.actions';

@Component({
  selector: 'app-third',
  template: `
    <h3>{{ title }} works!</h3>
    <div class="counter">
      <span>{{ counter }}</span>
    </div>
    <button (click)="reset()">
      Reset state
    </button>
  `,
  styles: []
})
export class ResetComponent implements OnInit {
  title = 'RESET component';

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

  reset() {
    this.appStore.dispatch(CounterActions.reset());
  }

  ngOnDestroy() {
    // remove listener
    this.unsubscribe();
  }

  ngOnInit() { }

}
