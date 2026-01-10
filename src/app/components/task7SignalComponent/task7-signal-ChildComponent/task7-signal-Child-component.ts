import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task7-signal-child-component',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './task7-signal-Child-component.html',
  styleUrl: './task7-signal-Child-component.scss',
})
export class Task7ChildComponent implements OnInit {
  seachData:string='';
  newUserName: string = '';
  masterUsers = signal<any[]>([])
  @Input() users=signal<any[]>([]);
  @Input() isLoading: boolean = false;
  @Input() isError: boolean = false;
  @Output() addUserEvent = new EventEmitter<string>();
  @Output() removeUserEvent = new EventEmitter<number>();

  addUser() {
    this.addUserEvent.emit(this.newUserName);
    this.masterUsers.set(this.users());
    this.showFilterData();
  }

  ngOnInit(): void {
    this.masterUsers.set(this.users());
  }

  removeUser(id: number) {
    this.removeUserEvent.emit(id);
    this.showFilterData();
  }

  showFilterData(){
    if(this.seachData){
      this.users.update(users=>users.filter(user=>user.name.toLowerCase().includes(this.seachData)));
     }else{
      this.users.set(this.masterUsers());
    }
  }
}