import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { LinkService } from './services/link.service';
import { ModalService } from './services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ClientApp';

  link: string;

  constructor(
    private dialog: MatDialog,
    private linkProvider: LinkService,
    private modalStateProvider: ModalService
  ){}

  ngOnInit(): void {
    setTimeout(() => {
      this.dialog.open(ModalComponent);
      this.modalStateProvider.updateModalState(true);
    }, 1500);
    this.linkProvider.currentLink.subscribe(link => this.link = link);
    this.modalStateProvider.currentModalState.subscribe(state => {
      if (!state){
        this.dialog.closeAll();
      }
    });
  }
}
