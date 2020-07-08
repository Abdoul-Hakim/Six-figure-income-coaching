import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private modalState: BehaviorSubject<boolean> = new BehaviorSubject(false);
  currentModalState = this.modalState.asObservable();

  constructor() { }

  updateModalState(state: boolean): void{
    this.modalState.next(state);
  }
}
