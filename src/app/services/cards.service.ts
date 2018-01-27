import { Injectable } from '@angular/core';
import { data } from '../mock';
import { Cards } from '../beans/cards.beans';

@Injectable()
export class CardsService {
  constructor() { }
  getJSON(): Cards[]{
  	return data;
  }
}
