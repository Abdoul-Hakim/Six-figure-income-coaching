import { Component, OnInit } from '@angular/core';
import { LinkService } from '../services/link.service';
import { ModalService } from '../services/modal.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {


  private text;

  contactForm = new FormGroup({
    userEmail: new FormControl('')
  });

  confirmation = false;
  confirmed = true;
  emailError = false;


  constructor(
    private modalStateProvider: ModalService
  ) { }

  ngOnInit(): void {
    const form = this.contactForm.getRawValue();
    console.log(form.userEmail);

  }


  confirm(){
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.text.match(pattern) !== null){
      this.confirmation = true;
      setTimeout(() => {
        this.modalStateProvider.updateModalState(false);
      }, 3000);
    } else {
      this.emailError = true;
    }
  }

  inputChange(e: any): void{
    this.text = e.target.value;
  }

}
