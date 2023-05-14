import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  contentList: ContentList;

  constructor() {
    this.contentList = new ContentList();

    const content1 = {
      id: 1,
      title: 'The Flowers of War',
      description: 'Chinese-Hong Kong historical drama war film',
      creator: 'Zhang Yimou',
      imgURL: 'assets/img/img1.jpg',
      type: 'History, Thriller, Suspence',
      tags: ['2011']
    };

    const content2 = {
      id: 2,
      title: '3 Idiots',
      description: 'Comedy-drama film',
      creator: 'Rajkumar Hirani',
      imgURL: 'assets/img/img2.jpeg',
      type: 'Comedy',
      tags: ['2009']
    };

    const content3 = {
      id: 3,
      title: 'Troy',
      description: 'Epic historical Torjan War film',
      creator: 'Wolfgang Petersen',
      imgURL: 'assets/img/img3.jpg',
      type: 'History, Thriller, Action',
      tags: ['2004']
    };

    this.contentList.addContent(content1);
    this.contentList.addContent(content2);
    this.contentList.addContent(content3);

  }
}