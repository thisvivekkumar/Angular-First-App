import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class task3Service {
  private http = Inject(HttpClient);

  getData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
