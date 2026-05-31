import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectorCount } from '../../store/counter/counter.selector';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [AsyncPipe],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  count$ : Observable<number>

  constructor(private store: Store) {
      this.count$ = this.store.select(selectorCount)
  }
}
