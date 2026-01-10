import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task7ParentComponent } from './task7-signal-component';

describe('Task7ParentComponent', () => {
  let component: Task7ParentComponent;
  let fixture: ComponentFixture<Task7ParentComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task7ParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Task7ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
