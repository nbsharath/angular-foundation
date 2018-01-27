import { Component, OnInit } from '@angular/core';
import { CardsService } from '../../services/cards.service';
import { Cards } from '../../beans/cards.beans';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
  providers: [CardsService]
})
export class CardsComponent implements OnInit {
	data: Cards[];
	constructor(private cradService: CardsService) { }

	ngOnInit() {
		this.data = this.cradService.getJSON();
	}

}
