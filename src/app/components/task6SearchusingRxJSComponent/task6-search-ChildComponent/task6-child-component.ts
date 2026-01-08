import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task6-child-component',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './task6-child-component.html',
  styleUrl: './task6-child-component.scss',
})
export class Task5ChildComponent {
  seachData:string='';
  newUserName: string = '';
  @Input() users: any[] = [];
  @Input() isLoading: boolean = false;
  @Input() isError: boolean = false;
  @Output() addUserEvent = new EventEmitter<string>();
  @Output() removeUserEvent = new EventEmitter<number>();

  addUser() {
    this.addUserEvent.emit(this.newUserName);
  }

  removeUser(id: number) {
    this.removeUserEvent.emit(id);
  }

  showFilterData(){
    if(this.seachData){
      this.users.filter(user=>user.name.toLowerCase().includes(this.seachData))
    }
  }
}