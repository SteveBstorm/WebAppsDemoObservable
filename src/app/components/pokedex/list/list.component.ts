import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { DetailComponent } from '../detail/detail.component';
import { Pokedex } from '../Models/Pokedex.Model';
import { PokeService } from '../service/poke.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  pokelist! : Pokedex

  constructor(
    private _service : PokeService,
    private _dialog : NbDialogService
  ) { }

  ngOnInit(): void {
    this.loadItems("https://pokeapi.co/api/v2/pokemon")
  }

  loadItems(url : string) {
    this._service.getPokedex(url).subscribe({
      next : (data : Pokedex) => this.pokelist = data
    })
  }

  next() {
    if(this.pokelist.next)
      this.loadItems(this.pokelist.next)
  }

  previous() {
    if(this.pokelist.previous)
      this.loadItems(this.pokelist.previous)
  }

  openDetail(url : string) {
    let ref = this._dialog.open(DetailComponent, {
      context : { currentUrl : url},
      closeOnEsc : false,
      closeOnBackdropClick : false

    })

    ref.onClose.subscribe((data : string) => console.log("Dernier pokémon vu : "+ data))
  }
}
