import { Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {

  // private user$ = new BehaviorSubject<User | null>(null);
  user: WritableSignal<User | null> = signal(null);

  getUser(): Signal<User | null> {
    // return this.user$.asObservable();
    return  this.user.asReadonly();
  }

  setUser(user: User | null) {
    // this.user$.next(user);
    this.user.set(user);
  }
}
