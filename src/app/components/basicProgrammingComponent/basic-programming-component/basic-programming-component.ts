import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesProgrammingService } from '../../../services/basicService/services-programming-component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-basic-programming-component',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './basic-programming-component.html',
  styleUrls: ['./basic-programming-component.scss'],
})

export class BasicProgrammingComponent implements OnInit {
  userData: any[] = [];
  newUserName: string = '';
  isLoading: boolean = false;
  errorMessage: string | null = null;

  constructor(private service: ServicesProgrammingService) {
  }

  ngOnInit() {
  this.isLoading = true; // 1. Start loading
  this.errorMessage = null; // 2. Reset errors

  this.getUsersData();
}

  addNewUser() {
    if (this.newUserName.trim()) {
      const newUserData: any = {
        id: window.crypto.getRandomValues(new Uint32Array(1))[0],
        name: this.newUserName,
        email: this.newUserName + '@testmail.com',
        company: {
          name: 'startup Company'
        }
      };
      this.userData = [newUserData, ...this.userData];
      this.newUserName = '';
    }

  }

  // getUsersData() {
  //   return this.service.getUsers().subscribe((data) => {
  //     console.log(data);
  //     this.userData = data;
  //   });
  // }

  getUsersData() {
    this.service.getUsers().subscribe(({
      next: data => {
        console.log(data);
        this.userData = data;
        this.isLoading = false; // 3. Stop loading
      },
      error: err => {
        this.isLoading = false; // 4. Done loading (even if it failed)
        this.errorMessage = "Could not load users. Is the internet okay?";
      
      //console.error(err);
      }
    }))

  }

  deleteUserData(id: number) {
    this.userData = this.userData.filter(user => user.id !== id);
  }
}