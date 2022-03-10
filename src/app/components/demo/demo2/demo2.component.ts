import { Component, OnInit } from '@angular/core';
import { NbPosition, NbToastrService } from '@nebular/theme';
import { Article } from 'src/app/Models/Article.model';
import { ConsoapiService } from 'src/app/services/consoapi.service';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {

  articleList! : Article[]
  constructor(
    private _consoapi : ConsoapiService,
    private _toast : NbToastrService
  ) { }

  ngOnInit(): void {
    this.loadItems()
   
    
  }

  loadItems() {
    this._consoapi.getAll().subscribe({
      next : (data : Article[]) => {
        this.articleList = data
        this._toast.info("Données bien chargées")
      } ,
      error: (error)=> this._toast.danger(error.message, "Erreur système", {
        duration : 4000
      })
    })
  }
  envoi() {
    this._consoapi.create().subscribe({
      next : () => {
        this.loadItems()
      }
    })
  }

}
