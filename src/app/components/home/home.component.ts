import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/service/pokemon/pokemon.service';
import { Pokemon } from 'src/app/shared/models/Pokemon';
import { ActivatedRoute } from '@angular/router';
import { Modal } from 'src/app/service/modal/modal.service';
import { SearchService } from 'src/app/service/search/search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  pokemons!: Pokemon[];
  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute,
    private modal: Modal,
    private searchService: SearchService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.pokemons = this.pokemonService.getAllPokemonsBySearchTerm(
          params['searchTerm']
        );

        this.setSearchInput(params['searchTerm']);
      } else if (params['type']) {
        this.pokemons = this.pokemonService.getAllPokemonsByType(
          params['type']
        );
      } else {
        this.pokemons = this.pokemonService.getAll();
        this.clearSearchInput();
      }
    });
  }

  getDetails(pokemon: Pokemon): void {
    this.modal.requestModal(pokemon);
  }

  setSearchInput(input: string): void {
    this.searchService.sendSearchInputJob(input);
  }

  clearSearchInput(): void {
    this.searchService.sendSearchInputJob('reset');
  }
}
