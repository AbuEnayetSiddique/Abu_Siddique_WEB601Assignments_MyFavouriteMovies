import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentListComponent } from '../content-list/content-list.component';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent{
  clickEvent(){
    console.log(this.content.id, this.content.title)
}
@Input() content : Content;
@Input() first: boolean
}