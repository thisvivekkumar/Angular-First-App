import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task6-child-component',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './task6-child-component.html',
  styleUrl: './task6-child-component.scss',
})
export class Task6ChildComponent implements OnInit {
  seachData:string='';
  newUserName: string = '';
  masterUsers:any[]=[];
  @Input() users: any[] = [];
  @Input() isLoading: boolean = false;
  @Input() isError: boolean = false;
  @Output() addUserEvent = new EventEmitter<string>();
  @Output() removeUserEvent = new EventEmitter<number>();

  addUser() {
    this.addUserEvent.emit(this.newUserName);
    this.masterUsers=this.users;
    this.showFilterData();
  }

  ngOnInit(): void {
    this.masterUsers=this.users;
  }

  removeUser(id: number) {
    this.removeUserEvent.emit(id);
    this.showFilterData();
  }

  showFilterData(){
    if(this.seachData){
      this.users=this.masterUsers;
      this.users=this.users.filter(user=>user.name.toLowerCase().includes(this.seachData))
    }else{
      this.users=this.masterUsers;
    }
  }
}