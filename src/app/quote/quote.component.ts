import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote (1,'Change the world by being yourself','Author: Amy Poehler', new Date(2016,3,15), 'Posted by: James',0,0),
    new Quote (2,'Every moment is a fresh beginning','Author:  T.S Eliot', new Date(1914,5,30), 'Posted by: William',0,0),
    new Quote (3,'Die with memories, not dreams','Author: Unknown', new Date(2000,1120), 'Posted by: Mchael',0,0),
    new Quote (4,'Everything you can imagine is real','Author: Pablo Picasso', new Date(1850,0,11), 'Posted by: Tom',0,0),
    new Quote (5,'Whatever you do, do it well','Author: Walt Disney', new Date(1960,7,17), 'Posted by:Jerry',0,0),
    new Quote (6,'What we think, we become','Author: Buddha', new Date(1925,2,5), 'Posted by:Goat',0,0),
  ];

  toggleDetails(index){
    this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
  }

  deleteQuote(isComplete, index){
    if (isComplete){
      let toDelete = confirm (`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.postedDate = new Date(quote.postedDate)
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
