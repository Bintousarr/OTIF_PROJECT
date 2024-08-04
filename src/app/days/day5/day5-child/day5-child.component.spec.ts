import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day5ChildComponent } from './day5-child.component';

describe('Day5ChildComponent', () => {
  let component: Day5ChildComponent;
  let fixture: ComponentFixture<Day5ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day5ChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day5ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
