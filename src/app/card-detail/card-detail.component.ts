import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.css'
})
export class CardDetailComponent implements OnInit {
  cardId: string;
  cardDetails: any;

  constructor(private route: ActivatedRoute, private cardService: CardService) {}

  ngOnInit(): void {
    this.cardId = this.route.snapshot.paramMap.get('name');
    this.cardService.getCardById(this.cardId).subscribe(data => {
      console.log(data)
      this.cardDetails = data; // Assuming 'fields' is the key for card details in the API response
    });
  }
}
