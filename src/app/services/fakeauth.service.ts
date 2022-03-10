import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeauthService {

  
  get isAuth() : boolean {
    if(localStorage.getItem('etat') == "true") return true
    else return false
  }

 // isAuthSubject : Subject<boolean> = new Subject<boolean>()
  isAuthSubject : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isAuth)

  emitSubject() {
    this.isAuthSubject.next(this.isAuth)
  }
  constructor() { }

  login() {
    
    localStorage.setItem('etat', 'true')
    this.emitSubject()
  }

  logout() {
    
    localStorage.clear()
    this.emitSubject()
  }
}
