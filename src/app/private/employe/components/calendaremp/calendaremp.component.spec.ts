import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarempComponent } from './calendaremp.component';

describe('CalendarempComponent', () => {
  let component: CalendarempComponent;
  let fixture: ComponentFixture<CalendarempComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarempComponent]
    });
    fixture = TestBed.createComponent(CalendarempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
