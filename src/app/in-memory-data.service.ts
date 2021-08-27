import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Pimentão Amarelo' },
      { id: 12, name: 'Sem nome' },
      { id: 13, name: 'Arrochado' },
      { id: 14, name: 'Cavaleiro Gaiato' },
      { id: 15, name: 'Feiticeira do Balde' },
      { id: 16, name: 'Mister Marte' },
      { id: 17, name: 'Sra. Desesperança' },
      { id: 18, name: 'Mister Matança' },
      { id: 19, name: 'Desfalecida' },
      { id: 20, name: 'Sr. Verdade' },
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
