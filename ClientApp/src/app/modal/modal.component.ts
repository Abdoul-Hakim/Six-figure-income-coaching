import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  link = '';

  constructor(
    private linkProvider: LinkService
  ) { }

  ngOnInit(): void {
    this.linkProvider.currentLink.subscribe(link => this.link = link);
  }

  checker(){

  }

}
