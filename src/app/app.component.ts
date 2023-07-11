import { Component } from '@angular/core';
import { MovieService } from './services/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Abu_Siddique_MyFavouritMovie';
  singleContentItem:any;
  requestedContentId: any;
  constructor(private movieService:MovieService){

  }
  ngOnInit(): void {
    const idNumber = 3;
    this.movieService.getContentItemById(idNumber).subscribe((data)=>{
        this.singleContentItem = data;
        console.log('singleContentItem', this.singleContentItem);
    });
  }

  getRequestedContent() {
    console.log('this.requestedContentId',this.requestedContentId);
    this.movieService.getContentItemById(this.requestedContentId).subscribe(item => {
      console.log('item',item);
      this.singleContentItem = item;
      console.log('singleContentItem click',this.singleContentItem);
    });
  }
}
