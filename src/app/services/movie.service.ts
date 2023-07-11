import { Injectable } from '@angular/core';
import { contentList } from '../helper-files/contentDb';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

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
}