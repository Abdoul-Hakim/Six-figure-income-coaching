import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
import { Router } from '@angular/router';
import { LinkService } from './link.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ClientApp';

  link = '';

  constructor(
    private dialog: MatDialog,
    private linkProvider: LinkService
  ){}

  ngOnInit(): void {
    setTimeout(() => {
      this.openDialog();
    }, 1500);
    this.linkProvider.currentLink.subscribe(link => this.link = link);

  }

  openDialog(): void {
    this.dialog.open(ModalComponent);
  }


}
