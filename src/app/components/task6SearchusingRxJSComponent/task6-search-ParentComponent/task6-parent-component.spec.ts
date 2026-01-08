import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task5ParentComponent } from './task6-parent-component';

describe('Task5ParentComponent', () => {
  let component: Task5ParentComponent;
  let fixture: ComponentFixture<Task5ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task5ParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task5ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
