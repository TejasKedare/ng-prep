import { Component, OnInit } from '@angular/core';
import { fromEvent, throttleTime } from 'rxjs';

@Component({
  selector: 'app-learn-throttle',
  imports: [],
  templateUrl: './learn-throttle.html',
  styleUrl: './learn-throttle.scss',
})

export class LearnThrottle implements OnInit {

  ngOnInit(): void {
    const btn = document.getElementById('btn') as HTMLButtonElement
    fromEvent(btn, 'click').pipe(
      throttleTime(500)
    ).subscribe(() => {
      console.log('button clicked')
    })
  }
}
