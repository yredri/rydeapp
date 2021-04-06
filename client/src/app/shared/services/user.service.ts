import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;
  users: User[] = [];

  constructor(private http: HttpClient) { }

  getUsers(){
    if(this.users.length > 0) return of(this.users);
     return this.http.get<User[]>(this.baseUrl + 'users').pipe(
       map(users => {
         this.users = users;
         return users;
       })
     )
  }

  getUser(id){
    const user = this.users.find(x => x.id === id);
    if(user != undefined) return of(user);
    return this.http.get<User>(this.baseUrl + 'users/' + id);
  }

  updateUser(user: User){
    return this.http.put(this.baseUrl + 'users', user).pipe(
      map(() => {
        const index = this.users.findIndex(x => x.id === user.id);
        this.users[index] = user;
      })
    )
  }
}
