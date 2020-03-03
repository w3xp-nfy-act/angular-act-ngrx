import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private show$ = new BehaviorSubject(false);
  constructor() { }

  showLoader() {
    this.show$.next(true);
  }

  hideLoader() {
    this.show$.next(false);
  }

  isLoading() {
    return this.show$;
  }
}