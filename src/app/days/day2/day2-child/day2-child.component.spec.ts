import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day2ChildComponent } from './day2-child.component';

describe('Day2ChildComponent', () => {
  let component: Day2ChildComponent;
  let fixture: ComponentFixture<Day2ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day2ChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day2ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
