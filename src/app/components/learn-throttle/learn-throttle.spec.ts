import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnThrottle } from './learn-throttle';

describe('LearnThrottle', () => {
  let component: LearnThrottle;
  let fixture: ComponentFixture<LearnThrottle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnThrottle],
    }).compileComponents();

    fixture = TestBed.createComponent(LearnThrottle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
