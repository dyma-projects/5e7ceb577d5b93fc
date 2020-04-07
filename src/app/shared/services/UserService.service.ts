import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users : BehaviorSubject<string[]> = new BehaviorSubject([]);
  
  constructor() { }

  public addUser(name : string) {
      this.users.getValue().push(name);
  }
}