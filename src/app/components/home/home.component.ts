import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon/pokemon.service';
import { Pokemon } from 'src/app/shared/models/Pokemon';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pokemons: Pokemon[] = [];
  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getAll();
    this.route.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.pokemons = this.pokemonService.getAllPokemonsBySearchTerm(
          params['searchTerm']
        );
      } else {
        this.pokemons = this.pokemonService.getAll();
      }
    });
  }
}
