import { Routes } from '@angular/router';
import { BasicProgrammingComponent } from './components/basicProgrammingComponent/basic-programming-component/basic-programming-component';
import { Task1Component } from './components/task1Component/task1-component';
import { Task2Component } from './components/task2Component/task2-component';
import { Task3Component } from './components/task3Component/task3-component';
import { Task4Component } from './components/task4Component/task4-component';
import { Task5ParentComponent } from './components/task5Components/task5ParentComponent/task5-parent-component';
import { Task6ParentComponent } from './components/task6SearchusingRxJSComponent/task6-search-ParentComponent/task6-parent-component';
import { Task7ParentComponent } from './components/task7SignalComponent/task7-signal-ParentComponent/task7-signal-component';
import { DsComponent } from './components/dataStructures/ds-component/ds-component';

export const routes: Routes = [
	{ path: '', component: BasicProgrammingComponent },
	{ path: 'task1', component: Task1Component },
	{ path: 'task2', component: Task2Component },
	{ path: 'task3', component: Task3Component },
	{ path: 'task4', component: Task4Component },
	{ path: 'task5', component: Task5ParentComponent },
	{ path: 'task6', component: Task6ParentComponent },
	{ path: 'task7', component: Task7ParentComponent },
	{ path: 'ds', component: DsComponent }
];
