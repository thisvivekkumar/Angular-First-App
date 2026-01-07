import { Component, OnInit } from '@angular/core';
import { task2Service } from '../../services/task2Service/task2Service';

@Component({
  selector: 'app-task3-component',
  imports: [],
  templateUrl: './task3-component.html',
  styleUrl: './task3-component.scss',
})
export class Task3Component implements OnInit {
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

  deleteUser(id: number) {
    this.users=this.users.filter(user=>user.id !==id);
  }
}
