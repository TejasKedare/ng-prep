import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnSignals } from './learn-signals';

describe('LearnSignals', () => {
  let component: LearnSignals;
  let fixture: ComponentFixture<LearnSignals>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnSignals],
    }).compileComponents();

    fixture = TestBed.createComponent(LearnSignals);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
