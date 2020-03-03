import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Store, createStore } from 'redux';
import { calculateReducer } from './store/reducers/calculate.reducer';
import { ICalculateState} from './store/state/calculate.state';

import { IncrementComponent, DecrementComponent, ResetComponent } from './totalizator';

const appStore: Store<ICalculateState> = createStore(calculateReducer);

@NgModule({
  declarations: [
    AppComponent,
    IncrementComponent,
    DecrementComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: 'AppStore', useValue: appStore },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
