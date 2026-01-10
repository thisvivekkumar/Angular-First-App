import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task6ChildComponent } from './task7-signal-Child-component';

describe('Task5ChildComponent', () => {
  let component: Task6ChildComponent;
  let fixture: ComponentFixture<Task6ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task6ChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task6ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
