import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon/pokemon.service';
import { Type } from 'src/app/shared/models/Type';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss'],
})
export class TypesComponent implements OnInit {
  types?: Type[];
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.types = this.pokemonService.getAllTypes();
  }
}
