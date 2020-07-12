import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { LinkService } from '../services/link.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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
