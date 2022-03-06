import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon/pokemon.service';
import { Pokemon } from 'src/app/shared/models/Pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pokemons: Pokemon[] = [];
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getAll();
  }
}
