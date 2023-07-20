import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contentList } from '../helper-files/contentDb';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Content } from '../helper-files/content-interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  /*addContent(newContent: Content) {
    throw new Error('Method not implemented.');
  }
  updateContent(newContent: Content) {
    throw new Error('Method not implemented.');
  }
  */
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' }),
  };

  constructor(private messagesService: MessageService) { }
  getContentArray():Observable<any[]>{
    this.messagesService.addMessage('Content array loaded!');
    return of(contentList)
  }
  getContentItemById(id:number):Observable<any>{
    // const contentItem = contentListArray.find(item=>item.id==id);
    // this.messagesService.addMessage(`Content Item at id: ${id}`);
    // return of(contentItem);
    const content = contentList.find(item => item.id == id);
    if (content) {
      this.messagesService.addMessage(`Content Item at id: ${id}`);
      return of(content);
    } else {
      this.messagesService.addMessage(`Content Item at id: ${id} not found`);
      return of(null);
    }
  }


  getContent(): Observable<Content[]> {
    console.log('1a');
    return this.http.get<Content[]>('api/content');
  }
  addContent(newContentItem: Content): Observable<Content> {
    return this.http.post<Content>(
      'api/content',
      newContentItem,
      this.httpOptions
    );
  }
  updateContent(contentItem: Content): Observable<any> {
    return this.http.put('api/content', contentItem, this.httpOptions);
  }
}