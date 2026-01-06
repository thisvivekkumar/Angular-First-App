import { Routes } from '@angular/router';
import { BasicProgrammingComponent } from './components/basicProgrammingComponent/basic-programming-component/basic-programming-component';
import { Task1Component } from './components/task1Component/task1-component/task1-component';

export const routes: Routes = [
	{ path: '', component: BasicProgrammingComponent },
	{ path: 'task1', component: Task1Component },
];
