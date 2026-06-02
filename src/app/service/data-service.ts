import { Injectable } from "@angular/core";
import { AsyncSubject, BehaviorSubject } from "rxjs";


@Injectable({
  'providedIn': 'root'
})

export class DataService {
  constructor() { }

  behaviorSubject = new BehaviorSubject<boolean>(false)
  behaviorSubjectData$ = this.behaviorSubject.asObservable()

  asyncSubject = new AsyncSubject<string>()
  asyncSubjectData = this.asyncSubject.asObservable()

  setBehaviorSubject(value: boolean) {
    this.behaviorSubject.next(value)
  }

  setAsyncSubject(value: string) {
    this.asyncSubject.next(value)
  }

  completeAsyncSubject() {
    this.asyncSubject.complete()
  }
}