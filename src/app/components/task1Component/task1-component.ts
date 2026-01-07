import { Component, OnInit } from '@angular/core';
import {task1Service} from "../../services/task1Service/task1Service";

@Component({
  selector: 'app-task1-component',
  imports: [],
  templateUrl: './task1-component.html',
  styleUrl: './task1-component.scss',
  standalone: true,
})
export class Task1Component implements OnInit {

  constructor(private task1service: task1Service) {

  }

  ngOnInit() {
    this.getData();
  }

  getData(){
    this.task1service.getData().subscribe((data)=>{
      console.log(data);
      return data;

    })
  }

}
