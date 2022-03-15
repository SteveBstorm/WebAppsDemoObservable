import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Pokemon } from '../Models/Pokedex.Model';
import { PokeService } from '../service/poke.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  @Input() currentUrl! : string

  currentPokemon! : Pokemon

  constructor(
    private _service : PokeService,
    private _dialogRef : NbDialogRef<DetailComponent>
  ) { }

  ngOnInit(): void {
    this._service.getPokemon(this.currentUrl).subscribe({
      next : (data : Pokemon)=> this.currentPokemon = data
    })
  }

  close() {
    this._dialogRef.close(this.currentPokemon.name)
  }

}
