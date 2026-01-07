import { Routes } from '@angular/router';
import { BasicProgrammingComponent } from './components/basicProgrammingComponent/basic-programming-component/basic-programming-component';
import { Task1Component } from './components/task1Component/task1-component';
import { Task2Component } from './components/task2Component/task2-component';

export const routes: Routes = [
	{ path: '', component: BasicProgrammingComponent },
	{ path: 'task1', component: Task1Component },
  { path: 'task2', component: Task2Component },
];
