import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicProgrammingComponent } from './basic-programming-component';

describe('BasicProgrammingComponent', () => {
  let component: BasicProgrammingComponent;
  let fixture: ComponentFixture<BasicProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicProgrammingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
