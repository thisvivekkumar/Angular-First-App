import { Component, OnInit } from '@angular/core';
import { task2Service } from '../../services/task2Service/task2Service';

@Component({
  selector: 'app-task2-component',
  imports: [],
  templateUrl: './task2-component.html',
  styleUrl: './task2-component.scss',
})
export class Task2Component implements OnInit {
  users: any[] = [];
  constructor(private task2service: task2Service) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.task2service.getData().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
  }
}
