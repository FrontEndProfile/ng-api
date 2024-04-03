import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrl: './card-page.component.css'
})

export class CardPageComponent implements OnInit {
  cards: any[] = [];

  constructor(private cardService: CardService, private router: Router) {}

  ngOnInit(): void {
    this.cardService.getAllCards().subscribe((data) => {
      this.cards = data;
      // console.log(this.cards)
    });
  }

}
