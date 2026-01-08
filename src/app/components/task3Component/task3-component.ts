import { Component, OnInit } from '@angular/core';
import { Task3Service } from '../../services/task3Service/task3Service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task3-component',
  templateUrl: './task3-component.html',
  styleUrls: ['./task3-component.scss'],
  imports: [FormsModule],
})
export class Task3Component implements OnInit {
  users: any[] = [];
  newUserName: string = '';
  constructor(private task3service: Task3Service) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.task3service.getData().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
  }

  removeUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }

  addUser() {
    if (this.newUserName.trim()) {
      const newUser = {
        id:Date.now(),
        name: this.newUserName,
        email: this.newUserName.toLowerCase().replace(/\s+/g, '') + '@example.com',
        company: { name: 'Startup Inc.' },
      }
      this.users = [newUser, ...this.users]
    }

  }
}