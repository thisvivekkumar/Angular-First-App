import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesProgrammingService } from '../../services/services-programming-component/services-programming-component';


@Component({
  selector: 'app-basic-programming-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-programming-component.html',
  styleUrls: ['./basic-programming-component.scss'],
})

export class BasicProgrammingComponent implements OnInit {
  userData: any[] = [];
  constructor(private service: ServicesProgrammingService) {
  }

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData() {
    return this.service.getUsers().subscribe((data) => {
      console.log(data);
      this.userData = data;
    });
  }

  deleteUserData(id: number) {
    this.userData = this.userData.filter(user => user.id !== id);
  }
}