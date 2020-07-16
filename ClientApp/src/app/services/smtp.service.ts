import { Injectable } from '@angular/core';
import '../../assets/js/smtp.js';
declare let Email: any;

@Injectable({
  providedIn: 'root'
})
export class SmtpService {

  constructor() { }

  async sendSubscribe(email: string) {
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'kichuprithvik@gmail.com',
      Password: '40112FDD1FFE340C82973EAA84C4BDACF6FA',
      To : 'kichuprithvik@gmail.com',
      From : 'kichuprithvik@gmail.com',
      Subject : 'A new client has registred',
      Body : `<p>A new client with the email ${email} has registred!!!<p>`
    });
  }

  async sendUnsubscribe(email: string){
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'kichuprithvik@gmail.com',
      Password: '40112FDD1FFE340C82973EAA84C4BDACF6FA',
      To : 'kichuprithvik@gmail.com',
      From : 'kichuprithvik@gmail.com',
      Subject : 'Client has unsubscribed',
      Body : `<p>The client with the email ${email} has unsubscribed!<p>`
      + '<p>Send him no more emails.</p>'
    });
  }
}
