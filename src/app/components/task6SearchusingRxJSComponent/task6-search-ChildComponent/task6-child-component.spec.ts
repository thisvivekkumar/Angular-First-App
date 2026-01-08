import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task5ChildComponent } from './task6-child-component';

describe('Task5ChildComponent', () => {
  let component: Task5ChildComponent;
  let fixture: ComponentFixture<Task5ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task5ChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task5ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
