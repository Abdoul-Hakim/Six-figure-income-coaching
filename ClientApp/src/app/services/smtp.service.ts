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
      Username: 'hakim.billa01@gmail.com',
      Password: '7ED7F08C6C3C4E39ADA7C3C8E8845059EDDC',
      To : 'hakim.billa01@gmail.com',
      From : 'hakim.billa01@gmail.com',
      Subject : 'A new client has registred',
      Body : `<p>A new client with the email ${email} has registred!!!<p>`
    }).then(console.log('data'));
  }

  async sendUnsubscribe(email: string){
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'buisness.raghu@gmail.com',
      Password: '982028D05DEC45E54A1D40ADFEBDDAC56807',
      To : 'buisness.raghu@gmail.com',
      From : 'buisness.raghu@gmail.com',
      Subject : 'Client has unsubscribed',
      Body : `<p>The client with the email ${email} has unsubscribed!<p>`
      + '<p>Send him no more emails.</p>'
    });
  }
}
