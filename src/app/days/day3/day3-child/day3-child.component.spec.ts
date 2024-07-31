import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day3ChildComponent } from './day3-child.component';

describe('Day3ChildComponent', () => {
  let component: Day3ChildComponent;
  let fixture: ComponentFixture<Day3ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day3ChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day3ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
