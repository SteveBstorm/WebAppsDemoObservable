import { Component, OnInit } from '@angular/core';
import { FakeauthService } from 'src/app/services/fakeauth.service';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})
export class Demo1Component implements OnInit {

  status! : boolean

  constructor(private _auth : FakeauthService) { }

  ngOnInit(): void {
    this.status = this._auth.isAuth
  }

  login() {
    this._auth.login()
    this.status = this._auth.isAuth
  }

  logout() {
    this._auth.logout()
    this.status = this._auth.isAuth
  }

}
