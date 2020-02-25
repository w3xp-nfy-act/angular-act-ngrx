* See:  
[ReactiveX](http://reactivex.io/documentation/operators.html)  
[RxJS](https://rxjs-dev.firebaseapp.com/guide/operators)  
[Example](https://github.com/ReactiveX/rxjs/blob/master/doc/observable.md)

What are operators? Operators are methods on the Observable type, such as .`map(...)`, `.filter(...)`, `.merge(...)`. When called, they do not change the existing Observable instance. Instead, they return a new Observable, whose subscription logic is based on the first Observable.

> An Operator is a function which creates a new Observable based on the current Observable. This is a pure operation: the previous Observable stays unmodified.
> Starting in version 5.5 change to "[pipeable operators](https://github.com/ReactiveX/rxjs/blob/master/doc/pipeable-operators.md)", which can be accessed in rxjs/operators (notice the pluralized "operators").
> Pipeable Operators are the kind that can be piped to Observables using the syntax observableInstance.pipe(operator()).

* Example
	For example, You pull in any operator you need from one spot, under 'rxjs/operators'.
	It's also possible to pull in the Observable creation methods you need directly as shown below with `'from'`:

		import { from } from 'rxjs';
		import { map, filter, scan } from 'rxjs/operators';

		//emit (1, 2, 3, 4, 5, 6)
		const source = from([1, 2, 3, 4, 5, 6]); // Observable creation methods

		const example = source.pipe(
				filter(x => x % 2 === 0), // 2, 4, 6
				map(x => x + x), // 4, 8, 12
				scan((acc, x) => acc + x, 0) // 4, 12, 24
		);
		// output: 4, 12, 24
		const subscribe = example.subscribe(val => console.log(val));