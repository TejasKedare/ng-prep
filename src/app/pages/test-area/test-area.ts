import { Component } from '@angular/core';
import { LearnDebounce } from '../../components/learn-debounce/learn-debounce';
import { LearnThrottle } from '../../components/learn-throttle/learn-throttle';

@Component({
  selector: 'app-test-area',
  imports: [LearnDebounce, LearnThrottle],
  templateUrl: './test-area.html',
  styleUrl: './test-area.scss',
})
export class TestArea {

}
