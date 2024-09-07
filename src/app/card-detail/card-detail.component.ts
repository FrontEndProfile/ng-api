import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../card.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.css'
})
export class CardDetailComponent implements OnInit {
  cardId: string;
  cardDetails: any;

  constructor(private route: ActivatedRoute,
     private cardService: CardService,
     private title: Title,
     private meta: Meta) {}

  ngOnInit(): void {
    this.cardId = this.route.snapshot.paramMap.get('name');
    this.cardService.getCardById(this.cardId).subscribe(data => {
      // console.log(data)
      this.cardDetails = data; // Assuming 'fields' is the key for card details in the API response
      this.setTitleAndMeta(data);
    });
  }
  setTitleAndMeta(cardDetails: any): void {
    const cardTitle = cardDetails.blog_page_title || 'Default Card Title'; // Update with the correct key
    const cardDescription = cardDetails.blog_page_description || 'Default Card Description'; // Update with the correct key

    this.title.setTitle(cardTitle);
    this.meta.updateTag({ name: 'description', content: cardDescription });
    // Add other meta tags if needed
    this.meta.updateTag({ name: 'keywords', content: cardDetails.blog_tags || 'default, keywords' });
  }

}
