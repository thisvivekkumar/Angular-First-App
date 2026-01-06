import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({ providedIn: 'root' })
export class task1Service {

    private http = inject(HttpClient);

    getData(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    }
}