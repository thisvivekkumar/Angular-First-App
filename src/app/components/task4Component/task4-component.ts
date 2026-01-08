import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task4Service } from '../../services/task4Service/task4Service';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-task4-component',
  standalone: true,
  templateUrl: './task4-component.html',
  styleUrls: ['./task4-component.scss'],
  imports: [CommonModule, FormsModule],
})
export class Task4Component implements OnInit {
  users: any[] = [];
  isLoading:boolean=false;
  isError:boolean=false;
  newUserName: string = '';
  constructor(private task4service: Task4Service, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.isLoading=false;
    this.isError=false;
    this.getUsers();
  }

  getUsers() {
    this.isLoading=true;
    // this.task4service.getData().subscribe((data) => {
    //   this.users = data;
    //   console.log(this.users);
    // });
    this.task4service.getData().subscribe({
      next:(data)=>{
        this.isLoading=false;
        this.isError=false;
        this.users=data;
        console.log(data);
        this.cdr.detectChanges();
      },
      error:(err)=>{
        this.isLoading=false;
        this.isError=true;
        console.log("Error in api response",err.message);
        this.cdr.detectChanges();
      }
    })
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