import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  currentLink: BehaviorSubject<string> = new BehaviorSubject('https://www.digistore24.com/redir/300124/Prithvik/');

  constructor() { }

  updateLink(newLink: string){
    this.currentLink.next(newLink);
  }
}
