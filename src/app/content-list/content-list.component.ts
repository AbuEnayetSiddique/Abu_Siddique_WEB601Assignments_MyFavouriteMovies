import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MovieService } from '../services/movie.service';
import { contentList } from '../helper-files/contentDb';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
 
  contentList:any[];

  constructor(private movieService:MovieService){
    this.contentList = contentList;
  }
  ngOnInit(): void {
    this.movieService.getContentArray().subscribe((data: any[])=>{
      this.contentList=data;
    });
  }

    findTitle : string ='';
    filterResult: boolean = false;
    searchResult: string = '';
    isContentFound: boolean = false;

    findContent() {
      this.filterResult = this.contentList.some(c => c.title === this.findTitle);
    
      this.isContentFound = !!this.filterResult;
      this.searchResult = this.isContentFound ? 'Content item found!' : 'Content item not found!';
      }
    
  }
