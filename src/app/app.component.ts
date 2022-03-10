import { Component, OnInit } from '@angular/core';
import { FakeauthService } from './services/fakeauth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(
    private _auth : FakeauthService
  ) {

  }

  ngOnInit(): void {
    this._auth.isAuthSubject.subscribe(
      {
        next : (info : boolean) => this.statut = info
      }
    )
  }
  title = 'WebApps_Demo2';
  statut! : boolean
}
