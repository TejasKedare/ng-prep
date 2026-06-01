import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnDebounce } from './learn-debounce';

describe('LearnDebounce', () => {
  let component: LearnDebounce;
  let fixture: ComponentFixture<LearnDebounce>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnDebounce],
    }).compileComponents();

    fixture = TestBed.createComponent(LearnDebounce);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
