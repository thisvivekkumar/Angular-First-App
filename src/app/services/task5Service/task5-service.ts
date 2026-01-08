import { HttpClient } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class Task5Service {
    private http = inject(HttpClient)

    getData(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    }
}

class comsumetaskService{
private task5svc=inject(Task5Service);

getUserData()
{
    this.task5svc.getData().subscribe({
        next:(response)=>{
            //this is response
        },
        error:(err)=>{
            //this is error
        }
    })
}
}