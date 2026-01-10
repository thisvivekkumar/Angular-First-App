import { ChangeDetectorRef, Component,signal } from '@angular/core';
import { Task7ChildComponent } from "../task7-signal-ChildComponent/task7-signal-Child-component";
import { Task6Service } from '../../../services/task6Service/task6-service';

@Component({
  selector: 'app-task7-parent-component',
  standalone: true,
  imports: [Task7ChildComponent],
  templateUrl: './task7-signal-component.html',
  styleUrl: './task7-signal-component.scss',
})
export class Task7ParentComponent {
  //users: any[] = [];
  users= signal<any[]>([]);
  isLoading: boolean = false;
  isError: boolean = false;
  newUserName: string = '';
  constructor(private task6service: Task6Service, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.isLoading = false;
    this.isError = false;
    this.getUsers();
  }

  getUsers() {
    this.isLoading = true;
    // this.task4service.getData().subscribe((data) => {
    //   this.users = data;
    //   console.log(this.users);
    // });
    this.task6service.getData().subscribe({
      next: (data) => {
        this.isLoading = false;
        this.isError = false;
        this.users = data;
        console.log(data);
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.isLoading = false;
        this.isError = true;
        console.log("Error in api response", err.message);
        this.cdr.detectChanges();
      }
    })
  }

  removeUser($event: number) {
    this.users.update(users => users.filter(user=>user.id!=$event));
  }

  addUser($event: string) {
    if ($event.trim()) {
      const newUser: any = {
        id: Date.now(),
        name: $event,
        email: $event.toLowerCase().replace(/\s+/g, '') + '@example.com',
        company: { name: 'Startup Inc.' },
      }
      this.users.set([newUser, ...this.users()]);
    }

  }
}
