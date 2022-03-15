import { Component, OnDestroy, OnInit } from '@angular/core';
import {NbMenuItem} from '@nebular/theme';
import { Subscription } from 'rxjs';
import { FakeauthService } from 'src/app/services/fakeauth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  items! : NbMenuItem[]
  status! : boolean

  statusSub! : Subscription
  constructor(
    private _auth : FakeauthService
  ) { }

  ngOnDestroy(): void {
    this.statusSub.unsubscribe()
  }

  ngOnInit(): void {
    this.statusSub = this._auth.isAuthSubject.subscribe({
      next : (data : boolean) => this.status = data
    })

    this.items = [
      {
        
        icon : 'trash',
        title : 'Demos', 
        children : [
          {title : 'Storage',
           url : 'demo/demo1',
           icon : 'book'
        },
        {title : 'HttpClient',
           url : 'demo/demo2',
           icon : 'book'
        },
        {title : 'Pokedex', url : 'pokedex'}
        ]
      }
    ]
  }

}
