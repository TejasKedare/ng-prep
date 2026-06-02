import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, throttleTime } from 'rxjs';

@Component({
  selector: 'app-learn-throttle',
  imports: [],
  templateUrl: './learn-throttle.html',
  styleUrl: './learn-throttle.scss',
})

export class LearnThrottle implements AfterViewInit  {

  @ViewChild('btn') btn! : ElementRef<HTMLButtonElement>

  ngAfterViewInit() {
    fromEvent(this.btn.nativeElement, 'click').pipe(
      throttleTime(500,undefined, {
        leading: true, // emit first click immediately of spam clicks
        trailing: true // emit last click of spam clicks it is false by default
      })
    ).subscribe(() => {
      console.log('Button is been clicked');
      
    })
  }

}
