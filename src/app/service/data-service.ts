import { Injectable } from "@angular/core";
import { AsyncSubject, BehaviorSubject } from "rxjs";



@Injectable({
  providedIn: 'root'
})

export class DataService {
  behavioralSubject = new BehaviorSubject<boolean>(false)
  behavioralSubjectData$ = this.behavioralSubject.asObservable()

  asyncSubject = new AsyncSubject<string>()
  asyncSubjectData$ = this.asyncSubject.asObservable()

  setBehavioralSubjectValue(value: boolean) {
    return this.behavioralSubject.next(value)
  }

  setAsyncSubjectValue(value: string){
    return this.asyncSubject.next(value)
  }

  completeAsyncSubject(){
    return this.asyncSubject.complete()
  }
}