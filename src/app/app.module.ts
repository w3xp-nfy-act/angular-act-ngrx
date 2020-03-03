import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Store, createStore } from 'redux';
import { calculateReducer } from './store/reducers/calculate.reducer';
import { ICalculateState} from './store/state/calculate.state';

import { IncrementComponent, DecrementComponent, ResetComponent } from './totalizator';

const appStore: Store<ICalculateState> = createStore(calculateReducer);

import { AppMarkdownComponent, } from './app-md.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    IncrementComponent,
    DecrementComponent,
    ResetComponent,
    AppMarkdownComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [
    { provide: 'AppStore', useValue: appStore },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
