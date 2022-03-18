import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/Pokemon';
import { Modal } from 'src/app/service/modal/modal.service';
import { PokemonService } from 'src/app/service/pokemon/pokemon.service';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss'],
})
export class CustomModalComponent implements OnInit {
  visible = false;
  pokemon!: Pokemon;
  message!: '';
  hasEvolution = false;
  evolutionFamily!: Pokemon[];
  constructor(private modal: Modal, private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.modal.getModalRequest().subscribe((pokemon) => {
      if (pokemon) {
        this.visible = true;
        this.pokemon = pokemon;
        if (this.pokemon.hasEvolution) {
          this.hasEvolution = true;
          this.evolutionFamily =
            this.pokemonService.getAllPokemonsByEvolutionFamilyId(
              this.pokemon.evolutionFamilyId,
              this.pokemon.id
            );
        }
      }
    });
  }

  hideModal(): void {
    this.visible = false;
    this.pokemon = new Pokemon();
    this.evolutionFamily = [];
    this.hasEvolution = false;
  }
}
