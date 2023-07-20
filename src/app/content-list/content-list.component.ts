import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { MovieService } from '../services/movie.service';
import { contentList } from '../helper-files/contentDb';
import { InMemoryDataService } from '../services/in-memory-data.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit{
 
  contentList: Content[] = [];

  constructor(private movieService:MovieService,private inMemoryDataService:InMemoryDataService){
    //this.contentListArray = contentListArray;
  }
  ngOnInit(): void {
    this.getContents();
    this.movieService.getContentArray().subscribe((data: any[])=>{
      //this.contentList=data;
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

      getContents(): void {
        this.movieService.getContent().subscribe((contents) => {
          this.contentList = contents;
        });
      }
      handleContentAdded(content: Content): void {
        const existingContentIndex = this.contentList.findIndex((c) => c.id === content.id);
    
        if (existingContentIndex !== -1) {
          this.contentList[existingContentIndex] = content;
        } else {
          this.contentList.push(content);
        }
      }
    
  }
