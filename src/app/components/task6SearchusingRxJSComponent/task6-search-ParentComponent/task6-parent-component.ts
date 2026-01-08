import { ChangeDetectorRef, Component } from '@angular/core';
import { Task5ChildComponent } from "../task6-search-ChildComponent/task6-child-component";
import { Task6Service } from '../../../services/task6Service/task6-service';

@Component({
  selector: 'app-task6-parent-component',
  imports: [Task5ChildComponent],
  templateUrl: './task6-parent-component.html',
  styleUrl: './task6-parent-component.scss',
})
export class Task5ParentComponent {
users: any[] = [];
  isLoading:boolean=false;
  isError:boolean=false;
  newUserName: string = '';
  constructor(private task6service: Task6Service, private cdr: ChangeDetectorRef) { }

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
    this.task6service.getData().subscribe({
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

  removeUser($event:number) {
    this.users = this.users.filter(user => user.id !== $event);
  }

  addUser($event:string) {
    if ($event.trim()) {
      const newUser:any = {
        id:Date.now(),
        name: $event,
        email: $event.toLowerCase().replace(/\s+/g, '') + '@example.com',
        company: { name: 'Startup Inc.' },
      }
      this.users = [newUser, ...this.users]
    }

  }
}
