import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/Pokemon';
import { Modal } from 'src/app/service/modal/modal.service';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss'],
})
export class CustomModalComponent implements OnInit {
  visible = false;
  pokemon!: Pokemon;
  message!: '';
  constructor(private modal: Modal) {}

  ngOnInit(): void {
    this.modal.getModalRequest().subscribe((pokemon) => {
      if (pokemon) {
        this.visible = true;
        this.pokemon = pokemon;
      }
    });
  }

  hideModal(): void {
    this.visible = false;
    this.pokemon = new Pokemon();
  }
}
