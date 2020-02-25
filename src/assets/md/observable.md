  #### Observable
  * See:  
  [ReactiveX](http://reactivex.io/documentation/observable.html)  
  [RxJS](https://rxjs-dev.firebaseapp.com/guide/observable)  
  [Example](https://github.com/ReactiveX/rxjs/blob/master/doc/observable.md)  
  
  * Pull versus Push
    Pull and Push are two different protocols that describe how a data Producer can communicate with a data Consumer.
  
    - What is Pull?
      In Pull systems, the Consumer determines when it receives data from the data Producer. The Producer itself is unaware of when the data will be delivered to the Consumer.
  
      Every JavaScript Function is a Pull system. The function is a Producer of data, and the code that calls the function is consuming it by "pulling" out a single return value from its call.
  
      ES2015 introduced generator functions and iterators (function*), another type of Pull system. Code that calls iterator.next() is the Consumer, "pulling" out multiple values from the iterator (the Producer).
  
    - What is Push?
      In Push systems, the Producer determines when to send data to the Consumer. The Consumer is unaware of when it will receive that data.
  
      Promises are the most common type of Push system in JavaScript today. A Promise (the Producer) delivers a resolved value to registered callbacks (the Consumers), but unlike functions, it is the Promise which is in charge of determining precisely when that value is "pushed" to the callbacks.
  
      RxJS introduces Observables, a new Push system for JavaScript. An Observable is a Producer of multiple values, "pushing" them to Observers (Consumers).
  
      - A Function is a lazily evaluated computation that synchronously returns a single value on invocation.
      - A generator is a lazily evaluated computation that synchronously returns zero to (potentially) infinite values on iteration.
      - A Promise is a computation that may (or may not) eventually return a single value.
      - An Observable is a lazily evaluated computation that can synchronously or asynchronously return zero to (potentially) infinite values from the time it's invoked onwards.  
  
  * Summary
    - Producer:  
    `Pull -> Passive: produces data when requested.`  
    `Push -> Active: produces data at its own pace.`  
  
    - Consumer:  
    `Pull -> Active: decides when data is requested.`  
    `Push -> Passive: reacts to received data.`  
  
  * Example
    The following is an Observable that pushes the values 1, 2, 3 immediately (synchronously) when subscribed, and the value 4 after one second has passed since the subscribe call, then completes:
  
        import { Observable } from 'rxjs';
    
        const observable = new Observable(subscriber => {
          subscriber.next(1);
          subscriber.next(2);
          subscriber.next(3);
          setTimeout(() => {
            subscriber.next(4);
            subscriber.complete();
          }, 1000);
        });
  
    To invoke the Observable and see these values, we need to subscribe to it:
  
        console.log('just before subscribe');
        observable.subscribe({
          next(x) { console.log('got value ' + x); },
          error(err) { console.error('something wrong occurred: ' + err); },
          complete() { console.log('done'); }
        });
        console.log('just after subscribe');