import { Injectable } from '@angular/core';
import { contentList } from '../helper-files/contentDb';
import { Content } from '../helper-files/content-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }
  createDb() {
    // setting it to the value of our array of content
    const content: Content[] = contentList;
    return { content };
  }
  genId(content: Content[]): number {
    return content.length > 0
      ? Math.max(...content.map((c) => c.id)) + 1
      : 2000;
  }
}
