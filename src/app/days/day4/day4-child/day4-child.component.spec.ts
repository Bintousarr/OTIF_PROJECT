import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4ChildComponent } from './day4-child.component';

describe('Day4ChildComponent', () => {
  let component: Day4ChildComponent;
  let fixture: ComponentFixture<Day4ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Day4ChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Day4ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
