import { Component, OnInit } from '@angular/core';
import { CardService } from './card.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ng-api';


  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    // // Example usage: Fetch all cards
    // this.cardService.getAllCards().subscribe(data => {
    //   console.log('All Cards:', data);
    // });

    // // Example usage: Fetch a specific card by ID
    // const cardId = 'your-card-id'; // Replace 'your-card-id' with an actual card ID
    // this.cardService.getCardById(cardId).subscribe(card => {
    //   console.log('Card by ID:', card);
    // });
  }

}
