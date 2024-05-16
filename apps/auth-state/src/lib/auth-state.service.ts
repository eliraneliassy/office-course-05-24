import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  private user$ = new BehaviorSubject<User | null>(null);

  getUser(): Observable<User | null> {
    return this.user$.asObservable();
  }

  setUser(user: User | null) {
    this.user$.next(user);
  }
}
