import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task5-child-component',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './task5-child-component.html',
  styleUrl: './task5-child-component.scss',
})
export class Task5ChildComponent {
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
}