import { AfterViewInit, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';


@Component({
  selector: 'app-learn-debounce',
  imports: [ReactiveFormsModule],
  templateUrl: './learn-debounce.html',
  styleUrl: './learn-debounce.scss',
})

export class LearnDebounce implements AfterViewInit {

  searchControl = new FormControl('')

  constructor() { }

  ngAfterViewInit(): void {

    this.searchControl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    ).subscribe((value) => {
      console.log(value);
      
    })

  }
}
