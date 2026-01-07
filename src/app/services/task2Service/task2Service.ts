import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class task2Service {

  private http = inject(HttpClient);

  getData():Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
