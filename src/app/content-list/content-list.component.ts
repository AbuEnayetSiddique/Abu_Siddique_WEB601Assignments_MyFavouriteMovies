import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
    contentListArray =[
    {
      id: 1,
      title: 'The Flowers of War',
      description: 'Chinese-Hong Kong historical drama war film',
      creator: 'Zhang Yimou',
      imgURL: 'assets/img/img1.jpg',
      type: 'History, Thriller, Suspence',
      tags: ['2011']
    },
    {
      id: 2,
      title: '3 Idiots',
      description: 'Comedy-drama film',
      creator: 'Rajkumar Hirani',
      imgURL: 'assets/img/img2.jpeg',
      type: 'Comedy',
      tags: ['2009']
    },
    {
      id: 3,
      title: 'Troy',
      description: 'Epic historical Torjan War film',
      creator: 'Wolfgang Petersen',
      imgURL: 'assets/img/img3.jpg',
      type: 'History, Thriller, Action',
      tags: ['2004']
    },
    {
      id: 4,
      title: 'The Flowers of War',
      description: 'Chinese-Hong Kong historical drama war film',
      creator: 'Zhang Yimou',
      imgURL: 'assets/img/img1.jpg',
      type: 'History, Thriller, Suspence',
      tags: ['2011']
    },
    {
      id: 5,
      title: 'The Flowers of War',
      description: 'Chinese-Hong Kong historical drama war film',
      creator: 'Zhang Yimou',
      imgURL: 'assets/img/img1.jpg',
      type: 'History, Thriller, Suspence',
      tags: ['2011']
    },
    {
      id: 6,
      title: 'The Flowers of War',
      description: 'Chinese-Hong Kong historical drama war film',
      creator: 'Zhang Yimou',
      imgURL: 'assets/img/img1.jpg',
      type: 'History, Thriller, Suspence',
      tags: ['2011']
    }
    ];

    showContent(getContent: any) {
      console.log('Content ID:', getContent.id);
      console.log('Content Title:', getContent.title);
  }

  }
