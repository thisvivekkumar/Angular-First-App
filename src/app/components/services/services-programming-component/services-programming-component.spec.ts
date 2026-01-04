import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesProgrammingComponent } from './services-programming-component';

describe('ServicesProgrammingComponent', () => {
  let component: ServicesProgrammingComponent;
  let fixture: ComponentFixture<ServicesProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesProgrammingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
