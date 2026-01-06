import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ServicesProgrammingService {
  private http = inject(HttpClient);

  getUsers(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/tttusers');
  }
}
