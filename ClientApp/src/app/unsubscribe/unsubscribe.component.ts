import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SmtpService } from '../services/smtp.service';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.scss']
})
export class UnsubscribeComponent implements OnInit {

  private text;
  confirmed = true;
  emailError = false;
  response = true;
  confirmation = false;

  constructor(
    private router: Router,
    private smtpProvider: SmtpService
  ) { }

  ngOnInit(): void {
  }

  unsubscription(answer: boolean){
    if (answer){
      this.response = false;
    } else {
      this.router.navigate(['/home']);
    }
  }

  confirm(answer: boolean){
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (this.text.match(pattern) !== null){
      this.confirmation = answer;
      this.confirmation = true;
      this.smtpProvider.sendUnsubscribe(this.text);
    } else {
      this.emailError = true;
    }
  }

  inputChange(e: any): void{
    this.text = e.target.value;
  }

}
