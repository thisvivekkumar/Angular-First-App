import { HttpClient } from '@angular/common/http';
import { Injectable,inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Task3Service {
  private http= inject(HttpClient);

  getData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

}
