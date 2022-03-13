import { Injectable } from '@angular/core';
import { Pokemon } from 'src/app/shared/models/Pokemon';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Modal {
  private subject = new Subject<any>();

  constructor() {}

  requestModal(pokemon: Pokemon) {
    console.log('Sending requestModal');
    this.subject.next(pokemon);
  }

  getModalRequest(): Observable<Pokemon> {
    return this.subject.asObservable();
  }
}
