import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Task4Service {
    private http = inject(HttpClient);

    getData():Observable<any> {
        return this.http.get('https://jsonplaceholderiii.typicode.com/users');
    }

}