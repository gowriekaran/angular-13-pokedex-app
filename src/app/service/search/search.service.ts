import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private subject = new Subject<any>();

  constructor() {}

  sendSearchInputJob(message: string) {
    this.subject.next(message);
  }

  receiveSearchInputJob(): Observable<any> {
    return this.subject.asObservable();
  }
}
